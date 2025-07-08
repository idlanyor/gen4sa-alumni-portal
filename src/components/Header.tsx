
import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-gen4sa-blue to-gen4sa-navy rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="font-playfair font-bold text-xl text-gen4sa-navy">
              Gen4sa
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gen4sa-blue transition-colors font-medium"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gen4sa-blue transition-colors font-medium"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-gen4sa-blue transition-colors font-medium"
            >
              Galeri
            </button>
            <button 
              onClick={() => scrollToSection('alumni')}
              className="text-gray-700 hover:text-gen4sa-blue transition-colors font-medium"
            >
              Alumni
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gen4sa-blue text-white px-6 py-2 rounded-full hover:bg-gen4sa-navy transition-colors"
            >
              Kontak
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-gen4sa-blue transition-colors font-medium"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-gen4sa-blue transition-colors font-medium"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-gen4sa-blue transition-colors font-medium"
              >
                Galeri
              </button>
              <button 
                onClick={() => scrollToSection('alumni')}
                className="text-left text-gray-700 hover:text-gen4sa-blue transition-colors font-medium"
              >
                Alumni
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left bg-gen4sa-blue text-white px-6 py-2 rounded-full hover:bg-gen4sa-navy transition-colors w-fit"
              >
                Kontak
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
