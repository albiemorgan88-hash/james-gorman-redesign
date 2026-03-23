'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Shield, Clock, ExternalLink, Check, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

  const fetchData = async () => {
    try {
      const response = await fetch('/api/admin');
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
        setRegistrations(data.registrations);
      }
    } catch (error) {
      console.error('Failed to fetch admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (registrationId: string, status: 'active' | 'rejected') => {
    setUpdating(registrationId);
    
    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'update_status',
          registrationId,
          status
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        await fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    } finally {
      setUpdating(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string, verified: boolean) => {
    if (status === 'active' && verified) return 'text-green-400';
    if (status === 'rejected') return 'text-red-400';
    return 'text-yellow-400';
  };

  const getStatusText = (status: string, verified: boolean) => {
    if (status === 'active' && verified) return 'Active';
    if (status === 'rejected') return 'Rejected';
    return 'Pending';
  };

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
          {/* Page Header */}
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
              Payment verification and registration management
            </p>
          </motion.div>

          {/* Stats Cards */}
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
                    <p className="text-muted-foreground text-sm font-mono">Total Revenue</p>
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
                    <p className="text-muted-foreground text-sm font-mono">Verified Payments</p>
                    <p className="text-2xl font-mono font-bold text-accent">
                      {stats.verifiedPayments}
                    </p>
                  </div>
                  <Shield className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-mono">Pending</p>
                    <p className="text-2xl font-mono font-bold text-yellow-400">
                      {stats.pendingVerification}
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Registrations Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-mono font-bold">All Registrations</h2>
              <p className="text-muted-foreground text-sm mt-1">
                Manage agent registrations and payment verification
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-background-secondary">
                  <tr>
                    <th className="text-left p-4 font-mono text-sm">Claw #</th>
                    <th className="text-left p-4 font-mono text-sm">Agent</th>
                    <th className="text-left p-4 font-mono text-sm">Payment</th>
                    <th className="text-left p-4 font-mono text-sm">Transaction</th>
                    <th className="text-left p-4 font-mono text-sm">Status</th>
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
                          <div className="text-sm text-muted-foreground truncate max-w-[200px]">
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
                              title="Approve"
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