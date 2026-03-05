"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="max-w-[740px] mx-auto">
      {items.map((item, i) => (
        <div key={i} className="border-b border-black/[.06]">
          <button
            className="w-full py-5 flex justify-between items-center text-left font-heading font-semibold text-[1.05rem] cursor-pointer text-dark"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.q}
            <span className={`text-accent text-xl ml-4 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[400px] pb-5" : "max-h-0"}`}>
            <p className="text-gray text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a }} />
          </div>
        </div>
      ))}
    </div>
  );
}
