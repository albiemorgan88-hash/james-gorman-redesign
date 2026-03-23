'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl">🦞</span>
            <span className="font-mono font-bold text-xl glow-text group-hover:text-primary transition-colors">
              ClawRoster
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-muted-foreground hover:text-primary transition-colors">
              Browse
            </Link>
            <Link href="/submit" className="text-muted-foreground hover:text-primary transition-colors">
              Submit
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>
          
          <Link 
            href="/submit"
            className="bg-primary hover:bg-primary-hover text-background px-4 py-2 rounded-lg font-mono font-medium transition-all hover:glow-border"
          >
            Submit Roster
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}