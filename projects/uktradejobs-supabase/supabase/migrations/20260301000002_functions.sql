-- Migration 002: Database functions and helpers

-- ============================================================
-- JOB SEARCH (full-text + filters)
-- ============================================================

CREATE OR REPLACE FUNCTION search_jobs(
  search_query TEXT DEFAULT NULL,
  filter_trade TEXT DEFAULT NULL,
  filter_city TEXT DEFAULT NULL,
  filter_job_type job_type DEFAULT NULL,
  filter_salary_min INT DEFAULT NULL,
  sort_by TEXT DEFAULT 'newest', -- newest, salary_high, salary_low
  page_limit INT DEFAULT 20,
  page_offset INT DEFAULT 0
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  slug TEXT,
  trade TEXT,
  job_type job_type,
  salary_min INT,
  salary_max INT,
  salary_period TEXT,
  city TEXT,
  county TEXT,
  is_featured BOOLEAN,
  is_remote BOOLEAN,
  company_name TEXT,
  company_slug TEXT,
  logo_url TEXT,
  created_at TIMESTAMPTZ,
  total_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  WITH filtered AS (
    SELECT
      jp.id, jp.title, jp.slug, jp.trade, jp.job_type,
      jp.salary_min, jp.salary_max, jp.salary_period,
      jp.city, jp.county, jp.is_featured, jp.is_remote,
      e.company_name, e.company_slug, e.logo_url,
      jp.created_at,
      COUNT(*) OVER() AS total_count
    FROM job_postings jp
    JOIN employers e ON e.id = jp.employer_id
    WHERE jp.status = 'active'
      AND jp.expires_at > NOW()
      AND (search_query IS NULL OR to_tsvector('english', jp.title || ' ' || jp.description || ' ' || jp.trade || ' ' || jp.city) @@ plainto_tsquery('english', search_query))
      AND (filter_trade IS NULL OR jp.trade ILIKE filter_trade)
      AND (filter_city IS NULL OR jp.city ILIKE '%' || filter_city || '%')
      AND (filter_job_type IS NULL OR jp.job_type = filter_job_type)
      AND (filter_salary_min IS NULL OR jp.salary_min >= filter_salary_min)
    ORDER BY
      jp.is_featured DESC,
      CASE WHEN sort_by = 'newest' THEN EXTRACT(EPOCH FROM jp.created_at) END DESC,
      CASE WHEN sort_by = 'salary_high' THEN jp.salary_max END DESC,
      CASE WHEN sort_by = 'salary_low' THEN jp.salary_min END ASC
    LIMIT page_limit OFFSET page_offset
  )
  SELECT * FROM filtered;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER;

-- ============================================================
-- EMPLOYER DASHBOARD STATS
-- ============================================================

CREATE OR REPLACE FUNCTION get_employer_dashboard(p_employer_id UUID)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'active_jobs', (SELECT COUNT(*) FROM job_postings WHERE employer_id = p_employer_id AND status = 'active'),
    'total_views', (SELECT COALESCE(SUM(views), 0) FROM job_postings WHERE employer_id = p_employer_id),
    'total_applications', (SELECT COALESCE(SUM(applications_count), 0) FROM job_postings WHERE employer_id = p_employer_id),
    'new_applications', (SELECT COUNT(*) FROM applications a JOIN job_postings jp ON jp.id = a.job_id WHERE jp.employer_id = p_employer_id AND a.status = 'submitted' AND a.created_at > NOW() - INTERVAL '7 days'),
    'subscription', (SELECT json_build_object('tier', es.tier, 'job_post_limit', es.job_post_limit, 'status', es.status, 'current_period_end', es.current_period_end) FROM employer_subscriptions es WHERE es.employer_id = p_employer_id AND es.status = 'active' LIMIT 1),
    'recent_applications', (
      SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json)
      FROM (
        SELECT a.id, a.applicant_name, a.applicant_email, a.status, a.created_at, jp.title AS job_title
        FROM applications a
        JOIN job_postings jp ON jp.id = a.job_id
        WHERE jp.employer_id = p_employer_id
        ORDER BY a.created_at DESC LIMIT 10
      ) t
    )
  ) INTO result;
  RETURN result;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER;

-- ============================================================
-- CHECK JOB POST LIMIT
-- ============================================================

CREATE OR REPLACE FUNCTION check_job_post_limit(p_employer_id UUID)
RETURNS BOOLEAN AS $$
DECLARE
  v_limit INT;
  v_count INT;
BEGIN
  SELECT COALESCE(es.job_post_limit, 1) INTO v_limit
  FROM employer_subscriptions es
  WHERE es.employer_id = p_employer_id AND es.status = 'active'
  ORDER BY es.created_at DESC LIMIT 1;

  IF v_limit IS NULL THEN v_limit := 1; END IF; -- default free tier

  SELECT COUNT(*) INTO v_count
  FROM job_postings
  WHERE employer_id = p_employer_id AND status IN ('active', 'draft');

  RETURN v_count < v_limit;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER;

-- ============================================================
-- INCREMENT JOB VIEWS (called from API, no auth needed)
-- ============================================================

CREATE OR REPLACE FUNCTION increment_job_views(p_job_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE job_postings SET views = views + 1 WHERE id = p_job_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- AUTO-CREATE FREE SUBSCRIPTION ON EMPLOYER INSERT
-- ============================================================

CREATE OR REPLACE FUNCTION create_default_subscription()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO employer_subscriptions (employer_id, tier, job_post_limit, featured_posts_included)
  VALUES (NEW.id, 'free', 1, 0);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_employer_default_sub
  AFTER INSERT ON employers
  FOR EACH ROW EXECUTE FUNCTION create_default_subscription();

-- ============================================================
-- AUTO-INCREMENT APPLICATION COUNT
-- ============================================================

CREATE OR REPLACE FUNCTION increment_application_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE job_postings SET applications_count = applications_count + 1 WHERE id = NEW.job_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_application_count
  AFTER INSERT ON applications
  FOR EACH ROW EXECUTE FUNCTION increment_application_count();
