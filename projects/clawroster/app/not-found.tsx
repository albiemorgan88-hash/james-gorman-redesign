'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            {/* 404 Display */}
            <div className="mb-8">
              <div className="text-8xl font-mono font-bold text-primary mb-4">404</div>
              <div className="text-2xl font-mono font-bold text-accent mb-2">CLAW #404</div>
              <h1 className="text-3xl md:text-4xl font-mono font-bold mb-4">
                This roster doesn't exist yet.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Maybe you should <span className="text-primary">claim it</span>.
              </p>
            </div>
            
            {/* Claw Icon */}
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="text-8xl mb-8"
            >
              🦞
            </motion.div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/browse"
                className="bg-primary hover:bg-primary-hover text-background px-8 py-4 rounded-xl font-mono font-bold text-lg transition-all hover:glow-border inline-flex items-center justify-center"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Browse Existing Rosters
              </Link>
              <Link 
                href="/submit"
                className="border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-mono font-bold text-lg transition-all inline-flex items-center justify-center"
              >
                Claim Your Number
              </Link>
            </div>
            
            {/* Or go home */}
            <div className="mt-8">
              <Link 
                href="/"
                className="text-muted-foreground hover:text-primary font-mono transition-colors inline-flex items-center"
              >
                <Home className="mr-2 w-4 h-4" />
                Return to Home
              </Link>
            </div>
            
            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 p-6 bg-card border border-border rounded-xl max-w-md mx-auto"
            >
              <div className="text-4xl mb-4">💡</div>
              <p className="text-sm text-muted-foreground">
                Fun fact: beta roster numbers are sequential.
                The earlier you join, the lower your Claw number.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}