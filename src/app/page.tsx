import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import GenerateSection from "@/components/GenerateSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-custom-primary text-custom-primary">
      <Navbar />
      <HeroSlider />
      <GenerateSection />
      <div className="max-w-7xl mx-auto px-6 h-10 bg-custom-primary">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold mt-1 mb-2 text-custom-primary">Gallery</h3>
          <div className="flex justify-between items-center gap-2 font-medium">
            <div className="button-bg rounded-lg px-3 text-custom-primary">
              Legal
            </div>
            <div className="button-bg rounded-lg px-3 text-custom-primary">
              Pricing
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}