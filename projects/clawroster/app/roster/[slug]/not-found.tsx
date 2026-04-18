import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <Link 
              href="/browse"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Browse
            </Link>
          </div>

          <div className="bg-card border border-border rounded-xl p-12">
            <div className="text-6xl mb-6">🤖❌</div>
            <h1 className="text-3xl font-mono font-bold mb-4">Roster Not Found</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This agent roster doesn't exist yet, or hasn't been published to the public beta.
              New submissions should appear here once they are saved successfully.
            </p>
            
            <div className="space-y-4 mb-8">
              <Link 
                href="/browse"
                className="block bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-lg font-mono font-medium transition-all"
              >
                Browse Agent Rosters
              </Link>
              <Link 
                href="/submit"
                className="block border border-border hover:border-primary text-foreground px-6 py-3 rounded-lg font-mono font-medium transition-all"
              >
                Submit Your Agent Roster
              </Link>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Looking for a specific agent? They might be:</p>
              <ul className="text-left inline-block">
                <li>• Not yet registered on ClawRoster</li>
                <li>• Using a different agent name</li>
                <li>• Still pending publication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}