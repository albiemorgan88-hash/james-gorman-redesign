import type { Metadata } from "next";
import { businesses } from "@/lib/companies";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const business = businesses.find(b => b.slug === params.slug);
  
  if (!business) {
    return {
      title: 'Business Not Found',
      description: 'Professional service provider not found.'
    };
  }

  const businessName = business.name
    .replace(/\s*premium\s*/gi, '')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  const tradeType = getTradeType(businessName);
  
  const location = business.address.includes('Londonderry') || business.address.includes('Derry') 
    ? 'Derry' 
    : business.address.split(',').slice(-3, -2)[0]?.trim() || 'Northern Ireland';

  const title = `${businessName} - Professional ${tradeType} in ${location}`;
  const description = `Quality ${tradeType} services in ${location}. Call ${business.phone} for a free quote.`;

  function getTradeType(name: string): string {
    const tradeMap: Record<string, string> = {
      'GC Electrical': 'Electrical Contractor',
      'David Scott and Son': 'Bathroom Specialist', 
      'Cph Joinery & Interior': 'Bespoke Joinery',
      'The Shower Doctor': 'Bathroom Specialist',
      'Md Pro Contracts': 'Roofing Contractor',
      'Heating Solutions Ni': 'Heating Engineer',
      'Belfast Kitchen Company': 'Kitchen Fitter',
      'Mccaffrey Kitchens': 'Kitchen Fitter',
      'Emd Plumbing & Heating': 'Heating Engineer',
      'The Roof Doctor': 'Roofing Contractor'
    };
    
    // Check for exact matches first
    if (tradeMap[name]) return tradeMap[name];
    
    // Default category mapping
    const categoryMap: Record<string, string> = {
      plumber: 'Plumbing',
      electrician: 'Electrical',
      builder: 'Building',
      hairdresser: 'Hair Salon',
      barber: 'Barber',
      'beauty salon': 'Beauty',
      mechanic: 'Mechanic',
      roofer: 'Roofing',
      painter: 'Painting & Decorating',
      tiler: 'Tiling',
      joiner: 'Joinery',
      landscaper: 'Landscaping',
      takeaway: 'Takeaway',
      'personal trainer': 'Personal Training',
      cleaner: 'Cleaning',
      'dog groomer': 'Dog Grooming',
      handyman: 'Handyman',
      plasterer: 'Plastering',
      locksmith: 'Locksmith',
      florist: 'Florist',
    };
    
    return categoryMap[business?.category?.toLowerCase() || ''] || business?.category || 'Trade Services';
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "Professional Business Showcase",
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${businessName} - Professional ${tradeType}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}