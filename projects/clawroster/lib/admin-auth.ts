import type { NextRequest } from 'next/server';

export const ADMIN_SECRET_HEADER = 'x-clawroster-admin-secret';

export function getExpectedAdminSecret() {
  return process.env.CLAWROSTER_ADMIN_SECRET || '';
}

export function isAdminRequestAuthorized(request: NextRequest) {
  const expectedSecret = getExpectedAdminSecret();

  if (!expectedSecret) {
    console.error('CLAWROSTER_ADMIN_SECRET is not configured');
    return false;
  }

  const providedSecret = request.headers.get(ADMIN_SECRET_HEADER) || '';
  return providedSecret === expectedSecret;
}
