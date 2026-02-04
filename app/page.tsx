import "./portfolio.css";
import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import CardGrid from "@/components/portfolio/CardGrid";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="portfolio-page">
      <Header />
      <main className="main">
        <div className="container">
          <HeroSection />
        </div>
        <CardGrid />
      </main>
      <Footer />
    </div>
  );
}
