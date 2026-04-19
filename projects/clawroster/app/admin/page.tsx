'use client';

import { type FormEvent, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Shield, Clock, ExternalLink, Check, X, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ADMIN_SECRET_STORAGE_KEY = 'clawroster-admin-secret';
const ADMIN_SECRET_HEADER = 'x-clawroster-admin-secret';

interface Registration {
  id: string;
  claw_number: number;
  agent_name: string;
  agent_description: string;
  wallet_address: string;
  tx_hash: string;
  payment_amount: number;
  payment_token: string;
  payment_verified: boolean;
  created_at: string;
  status: string;
}

interface AdminStats {
  totalRevenue: number;
  totalRegistrations: number;
  verifiedPayments: number;
  pendingVerification: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [adminSecret, setAdminSecret] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authError, setAuthError] = useState('');

  const getAuthHeaders = (secret: string) => ({
    'Content-Type': 'application/json',
    [ADMIN_SECRET_HEADER]: secret,
  });

  const fetchData = useCallback(async (secret: string) => {
    setLoading(true);
    setAuthError('');

    try {
      const response = await fetch('/api/admin', {
        headers: getAuthHeaders(secret),
      });

      const data = await response.json();

      if (response.status === 401) {
        setIsAuthorized(false);
        setAuthError('Wrong admin secret.');
        localStorage.removeItem(ADMIN_SECRET_STORAGE_KEY);
        return false;
      }

      if (data.success) {
        setStats(data.stats);
        setRegistrations(data.registrations);
        setIsAuthorized(true);
        localStorage.setItem(ADMIN_SECRET_STORAGE_KEY, secret);
        return true;
      }

      setAuthError(data.error || 'Failed to load admin data.');
      return false;
    } catch (error) {
      console.error('Failed to fetch admin data:', error);
      setAuthError('Failed to load admin data.');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateStatus = async (registrationId: string, status: 'active' | 'rejected') => {
    setUpdating(registrationId);

    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: getAuthHeaders(adminSecret),
        body: JSON.stringify({
          action: 'update_status',
          registrationId,
          status,
        }),
      });

      if (response.status === 401) {
        setIsAuthorized(false);
        setAuthError('Admin session expired. Re-enter the secret.');
        localStorage.removeItem(ADMIN_SECRET_STORAGE_KEY);
        return;
      }

      const data = await response.json();

      if (data.success) {
        await fetchData(adminSecret);
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    } finally {
      setUpdating(null);
    }
  };

  useEffect(() => {
    const storedSecret = localStorage.getItem(ADMIN_SECRET_STORAGE_KEY);

    if (!storedSecret) {
      setLoading(false);
      return;
    }

    setAdminSecret(storedSecret);
    void fetchData(storedSecret);
  }, [fetchData]);

  const unlockAdmin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetchData(adminSecret);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string, verified: boolean) => {
    if (status === 'active' && verified) return 'text-cyan-300';
    if (status === 'active') return 'text-primary';
    if (status === 'rejected') return 'text-red-400';
    return 'text-yellow-400';
  };

  const getStatusText = (status: string, verified: boolean) => {
    if (status === 'active' && verified) return 'PoB Verified';
    if (status === 'active') return 'Live Beta';
    if (status === 'rejected') return 'Rejected';
    return 'Pending';
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h1 className="text-3xl font-mono font-bold">ClawRoster Admin</h1>
              </div>
              <p className="text-muted-foreground mb-6">
                This dashboard is locked behind the shared admin secret.
              </p>
              <form onSubmit={unlockAdmin} className="space-y-4">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Admin secret
                  </label>
                  <input
                    type="password"
                    value={adminSecret}
                    onChange={(event) => setAdminSecret(event.target.value)}
                    className="w-full rounded-lg border border-border bg-background-secondary px-4 py-3 font-mono text-foreground focus:outline-none focus:border-primary"
                    placeholder="Enter shared secret"
                  />
                </div>
                {authError && (
                  <div className="rounded-lg border border-red-400/30 bg-red-900/20 px-4 py-3 text-sm text-red-300">
                    {authError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={!adminSecret || loading}
                  className="w-full rounded-lg bg-primary px-4 py-3 font-mono font-bold text-background transition-colors hover:bg-primary-hover disabled:opacity-50"
                >
                  {loading ? 'Unlocking...' : 'Unlock admin'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading admin data...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
              ClawRoster <span className="text-primary">Admin</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Live beta moderation, trust-state review, and PoB verification tracking
            </p>
          </motion.div>

          {stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-mono">Verified Revenue</p>
                    <p className="text-2xl font-mono font-bold text-green-400">
                      ${stats.totalRevenue.toFixed(2)}
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-mono">Total Registrations</p>
                    <p className="text-2xl font-mono font-bold text-primary">
                      {stats.totalRegistrations}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-mono">PoB Verified</p>
                    <p className="text-2xl font-mono font-bold text-cyan-300">
                      {stats.verifiedPayments}
                    </p>
                  </div>
                  <Shield className="w-8 h-8 text-cyan-300" />
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-mono">Needs Review</p>
                    <p className="text-2xl font-mono font-bold text-yellow-400">
                      {stats.pendingVerification}
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-mono font-bold">All Registrations</h2>
              <p className="text-muted-foreground text-sm mt-1">
                Active records can stay live beta without being marked PoB verified.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-background-secondary">
                  <tr>
                    <th className="text-left p-4 font-mono text-sm">Claw #</th>
                    <th className="text-left p-4 font-mono text-sm">Agent</th>
                    <th className="text-left p-4 font-mono text-sm">Submission</th>
                    <th className="text-left p-4 font-mono text-sm">Transaction</th>
                    <th className="text-left p-4 font-mono text-sm">Trust State</th>
                    <th className="text-left p-4 font-mono text-sm">Date</th>
                    <th className="text-left p-4 font-mono text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg, index) => (
                    <tr key={reg.id} className={index % 2 === 0 ? 'bg-background' : 'bg-background-secondary'}>
                      <td className="p-4 font-mono font-bold text-primary">#{reg.claw_number}</td>
                      <td className="p-4">
                        <div>
                          <div className="font-mono font-bold">{reg.agent_name}</div>
                          <div className="text-sm text-muted-foreground truncate max-w-[220px]">
                            {reg.agent_description}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-mono">
                          <div className="text-accent">{reg.payment_amount} {reg.payment_token}</div>
                          <div className="text-xs text-muted-foreground">
                            {reg.wallet_address.slice(0, 8)}...{reg.wallet_address.slice(-6)}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        {reg.tx_hash.startsWith('api-beta-') || reg.tx_hash.startsWith('free-beta-') ? (
                          <span className="font-mono text-sm text-muted-foreground">Beta submission</span>
                        ) : (
                          <a
                            href={`https://basescan.org/tx/${reg.tx_hash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-primary hover:text-accent transition-colors"
                          >
                            <span className="font-mono text-sm">
                              {reg.tx_hash.slice(0, 8)}...{reg.tx_hash.slice(-6)}
                            </span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </td>
                      <td className="p-4">
                        <span className={`font-mono text-sm ${getStatusColor(reg.status, reg.payment_verified)}`}>
                          {getStatusText(reg.status, reg.payment_verified)}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground font-mono">
                        {formatDate(reg.created_at)}
                      </td>
                      <td className="p-4">
                        {reg.status === 'pending' && (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => updateStatus(reg.id, 'active')}
                              disabled={updating === reg.id}
                              className="p-1 bg-green-900/20 text-green-400 rounded hover:bg-green-900/40 transition-colors disabled:opacity-50"
                              title="Approve as live beta"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => updateStatus(reg.id, 'rejected')}
                              disabled={updating === reg.id}
                              className="p-1 bg-red-900/20 text-red-400 rounded hover:bg-red-900/40 transition-colors disabled:opacity-50"
                              title="Reject"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {registrations.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No registrations yet</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
