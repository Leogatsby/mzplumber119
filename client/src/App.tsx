import HNB from "./components/1.HNB/HNB";
import MainVideo from "./components/2.MainVideo/MainVideo";
import FloatSection from "./components/FloatSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ReviewSection from "./components/ReviewSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <HNB />
      <MainVideo />
      <AboutSection id="about" />
      <ServicesSection id="services" />
      <ReviewSection id="reviews" />
      <ContactSection id="contact" />
      <FooterSection />
      <FloatSection />
    </div>
  );
}
