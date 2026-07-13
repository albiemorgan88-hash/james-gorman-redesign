'use client';

import { FormEvent, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { contact, showcases } from './data';

function normalisePostcode(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export default function IndexPage() {
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState('');

  const postcodeMap = useMemo(() => {
    const map = new Map<string, (typeof showcases)[number]>();
    showcases.forEach((showcase) => {
      showcase.accessPostcodes.forEach((code) => map.set(normalisePostcode(code), showcase));
    });
    return map;
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = normalisePostcode(postcode);
    const match = postcodeMap.get(clean);

    if (!clean) {
      setError('Enter your postcode to continue.');
      return;
    }

    if (!match) {
      setError(`We couldn't find a showcase for that postcode yet. Call ${contact.phone} and James will help.`);
      return;
    }

    window.location.href = `/${match.slug}`;
  }

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#211638] px-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(246,176,207,0.38),transparent_28%),linear-gradient(120deg,rgba(20,18,55,0.96),rgba(125,50,91,0.82)),url('/assets/hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/20" />

      <section className="relative w-full max-w-[440px] text-center">
        <img
          src="/assets/jgp/logo-white.png"
          alt="James Gorman Property"
          className="mx-auto mb-12 h-auto w-52 object-contain md:w-60"
        />

        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Property showcase postcode gate">
          <label htmlFor="postcode" className="sr-only">Property postcode</label>
          <input
            id="postcode"
            value={postcode}
            onChange={(event) => {
              setPostcode(event.target.value);
              setError('');
            }}
            placeholder="Enter postcode"
            autoComplete="postal-code"
            className="w-full rounded-full border border-white/40 bg-white px-7 py-5 text-center text-lg font-semibold uppercase tracking-[0.12em] text-[#170f2e] shadow-[0_24px_70px_rgba(0,0,0,0.28)] outline-none transition placeholder:normal-case placeholder:tracking-normal placeholder:text-[#170f2e]/45 focus:border-[#efbfd7] focus:ring-4 focus:ring-[#efbfd7]/35"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#11051c] px-7 py-5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition hover:bg-[#2a1236] focus:outline-none focus:ring-4 focus:ring-[#efbfd7]/35"
          >
            View showcase <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {error ? (
          <p className="mx-auto mt-5 max-w-sm rounded-2xl bg-white/12 px-4 py-3 text-sm font-medium leading-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur">
            {error}
          </p>
        ) : null}
      </section>
    </main>
  );
}
