const MAX_BODY_LENGTH = 12_000;

function send(res, status, message) {
  res.status(status).json({ ok: status >= 200 && status < 300, message });
}

function text(value, maxLength = 500) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function bodyFrom(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  return Object.fromEntries(new URLSearchParams(typeof req.body === 'string' ? req.body : ''));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, 'Method not allowed.');
  }

  const bodyLength = Number(req.headers['content-length'] || 0);
  if (bodyLength > MAX_BODY_LENGTH) return send(res, 413, 'Request too large.');

  const body = bodyFrom(req);
  if (text(body.website, 200)) return send(res, 202, 'Request received.');

  const requestType = text(body.requestType, 30);
  const name = text(body.name, 120);
  const email = text(body.email, 200).toLowerCase();
  const school = text(body.school, 200);
  const role = text(body.role, 120);
  const privacyAcknowledged = text(body.privacyAcknowledged, 10);

  if (!['workshop', 'resource'].includes(requestType)) return send(res, 400, 'Choose a valid request type.');
  if (!name || !school || !role) return send(res, 400, 'Complete all required fields.');
  if (!/^\S+@\S+\.\S+$/.test(email)) return send(res, 400, 'Enter a valid work email.');
  if (privacyAcknowledged !== 'yes') return send(res, 400, 'Please read and acknowledge the privacy notice.');

  const destination = process.env.ENQUIRY_WEBHOOK_URL;
  if (!destination) return send(res, 503, 'Online enquiries are temporarily unavailable. Please try again later.');

  const payload = {
    requestType,
    name,
    email,
    school,
    role,
    resource: text(body.resource, 200),
    location: text(body.location, 100),
    audience: text(body.audience, 120),
    groupSize: text(body.groupSize, 40),
    timing: text(body.timing, 120),
    message: text(body.message, 2_000),
    source: 'antibullyingni.co.uk',
    submittedAt: new Date().toISOString(),
  };

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (process.env.ENQUIRY_WEBHOOK_BEARER_TOKEN) {
      headers.Authorization = `Bearer ${process.env.ENQUIRY_WEBHOOK_BEARER_TOKEN}`;
    }

    const response = await fetch(destination, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) return send(res, 502, 'We could not send your request. Please try again later.');
    return send(res, 200, 'Request received.');
  } catch {
    return send(res, 502, 'We could not send your request. Please try again later.');
  }
}
