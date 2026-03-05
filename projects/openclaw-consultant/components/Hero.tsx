import { ReactNode } from "react";

export default function Hero({ children }: { children: ReactNode }) {
  return (
    <section className="bg-blue text-white pt-36 pb-20 relative overflow-hidden">
      {/* Animated gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,87,34,0.15)_0%,transparent_50%)] animate-hero-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(43,77,175,0.3)_0%,transparent_50%)] animate-hero-glow-reverse" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">{children}</div>
    </section>
  );
}
