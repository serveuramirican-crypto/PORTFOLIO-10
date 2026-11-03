import React from 'react';
import { HeroBanners } from '@/components/HeroBanners';
import { HomeHero } from '@/components/HomeHero';
import { TrustBar } from '@/components/TrustBar';
import { CategoryGrid } from '@/components/CategoryGrid';
import { EssenceBanner } from '@/components/EssenceBanner';
import { ProductRail } from '@/components/ProductRail';
import { TrustMascotSection } from '@/components/TrustMascotSection';
import { BrandsSection } from '@/components/BrandsSection';
import { AboutSection } from '@/components/AboutSection';
import { CustomerReviews } from '@/components/CustomerReviews';
import { bestSellersProducts, newArrivalsProducts } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 pb-12">
      {/* 1. Category / Promotional Banners Bar */}
      <HeroBanners />

      {/* 2. Main Hero Section with Interactive Pupil Tracking Mascot */}
      <HomeHero />

      {/* 3. Reassurance / Trust Bar */}
      <TrustBar />

      {/* 4. Category Grid */}
      <CategoryGrid />

      {/* 5. Essence Feature Banner */}
      <EssenceBanner />

      {/* 6. Product Rail 1: Meilleures ventes (Les plus vendus) */}
      <ProductRail
        eyebrow="Meilleures ventes"
        title="Les plus vendus"
        seeAllHref="/collections/dernieres-ventes"
        products={bestSellersProducts}
      />

      {/* 7. Trust Mascot Section: "Ils nous font confiance !" */}
      <TrustMascotSection />

      {/* 8. Product Rail 2: Arrivages (Nouveautés) */}
      <ProductRail
        eyebrow="Arrivages"
        title="Nouveautés"
        seeAllHref="/collections/nouveautes"
        products={newArrivalsProducts}
      />

      {/* 9. Brands Section (Continuous Gliding Marquee) */}
      <BrandsSection />

      {/* 10. About Store Section with Peeking Animated Mascot on Scroll */}
      <AboutSection />

      {/* 11. Google Customer Reviews & Store Location Card */}
      <CustomerReviews />
    </div>
  );
}
