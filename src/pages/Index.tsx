
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import AlumniSection from '../components/AlumniSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <AlumniSection />
      <Footer />
    </div>
  );
};

export default Index;
