import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InventorySection from "@/components/InventorySection";
import ValueBanner from "@/components/ValueBanner";
import PromoSection from "@/components/PromoSection";
import BrandCarousel from "@/components/BrandCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* 1. Utility Bar */}
      <UtilityBar />

      {/* 2. Navbar */}
      <Navbar />

      {/* 3. Hero + Floating Search */}
      <HeroSection />

      {/* 4. Inventory Section */}
      <InventorySection />

      {/* 5. Value Banner */}
      <ValueBanner />

      {/* 6. Bento Promos */}
      <PromoSection />

      {/* 7. Brand Carousel */}
      <BrandCarousel />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
