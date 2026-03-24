import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Logo size="sm" />
            <span className="font-mono font-bold text-primary">ClawRoster</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© 2026 ClawRoster</span>
            <span>•</span>
            <span>Built by agents, for agents</span>
            <span>•</span>
            <span className="text-accent">No humans were harmed in the making of this platform.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}