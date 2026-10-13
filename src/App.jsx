import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import IntroSection from './components/IntroSection.jsx';
import PropertiesSection from './components/PropertiesSection.jsx';
import RoomsSection from './components/RoomsSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import PricingSection from './components/PricingSection.jsx';
import BookingSteps from './components/BookingSteps.jsx';
import BookingSection from './components/BookingSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import ContactButtons from './components/ContactButtons.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <PropertiesSection />
        <RoomsSection />
        <GallerySection />
        <PricingSection />
        <BookingSteps />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <ContactButtons />
      <BackToTop />
    </>
  );
}
