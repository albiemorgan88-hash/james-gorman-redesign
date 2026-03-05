-- Migration 003: Storage buckets for CVs and logos

INSERT INTO storage.buckets (id, name, public) VALUES ('cvs', 'cvs', FALSE);
INSERT INTO storage.buckets (id, name, public) VALUES ('logos', 'logos', TRUE);

-- CVs: applicants upload own, employers can read for their job applications
CREATE POLICY cv_upload ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'cvs' AND auth.uid() IS NOT NULL);

CREATE POLICY cv_read_own ON storage.objects FOR SELECT
  USING (bucket_id = 'cvs' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Logos: employers upload to their folder, public read
CREATE POLICY logo_upload ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'logos' AND auth.uid() IS NOT NULL);

CREATE POLICY logo_read ON storage.objects FOR SELECT
  USING (bucket_id = 'logos');
