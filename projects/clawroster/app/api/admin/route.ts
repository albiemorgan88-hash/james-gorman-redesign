// API Route: Admin data and operations
import { NextRequest, NextResponse } from 'next/server';
import { getAllRegistrations, getTotalRevenue, updateRegistrationStatus } from '../../../lib/supabase';
import { isAdminRequestAuthorized } from '../../../lib/admin-auth';

export async function GET(request: NextRequest) {
  if (!isAdminRequestAuthorized(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [registrations, totalRevenue] = await Promise.all([
      getAllRegistrations(),
      getTotalRevenue()
    ]);
    
    const totalRegistrations = registrations.length;
    const verifiedPayments = registrations.filter(r => r.payment_verified).length;
    
    return NextResponse.json({
      success: true,
      stats: {
        totalRevenue,
        totalRegistrations,
        verifiedPayments,
        pendingVerification: totalRegistrations - verifiedPayments
      },
      registrations
    });
    
  } catch (error) {
    console.error('Admin GET API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch admin data' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequestAuthorized(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action, registrationId, status, paymentVerified } = body;
    
    if (action === 'update_status') {
      if (!registrationId || !status) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Missing registrationId or status' 
          },
          { status: 400 }
        );
      }
      
      await updateRegistrationStatus(registrationId, status, paymentVerified === true);
      
      return NextResponse.json({
        success: true,
        message: `Registration ${status === 'active' ? 'approved' : 'rejected'}`
      });
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid action' 
      },
      { status: 400 }
    );
    
  } catch (error) {
    console.error('Admin POST API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to perform admin action' 
      },
      { status: 500 }
    );
  }
}
