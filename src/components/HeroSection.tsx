
import { ArrowDown, Users, Calendar, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gen4sa-cream via-white to-gen4sa-blue/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gen4sa-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gen4sa-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gen4sa-navy rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gen4sa-navy mb-6 leading-tight">
              Gen<span className="text-gen4sa-blue">4</span>sa
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-gen4sa-blue to-gen4sa-gold mx-auto mb-6"></div>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="font-poppins text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Generasi Alumni
            </h2>
            <h3 className="font-poppins text-2xl md:text-3xl text-gen4sa-navy mb-8 font-semibold">
              SMP Negeri 4 Satap Karangjambu
            </h3>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="font-poppins text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Menghubungkan generasi alumni dalam satu ikatan yang kuat, berbagi cerita, prestasi, 
              dan membangun masa depan yang lebih baik bersama.
            </p>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gen4sa-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gen4sa-blue" />
              </div>
              <div className="font-bold text-3xl text-gen4sa-navy mb-2">500+</div>
              <div className="text-gray-600 font-medium">Alumni Terdaftar</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gen4sa-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gen4sa-gold" />
              </div>
              <div className="font-bold text-3xl text-gen4sa-navy mb-2">25+</div>
              <div className="text-gray-600 font-medium">Tahun Berkarya</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gen4sa-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gen4sa-navy" />
              </div>
              <div className="font-bold text-3xl text-gen4sa-navy mb-2">100+</div>
              <div className="text-gray-600 font-medium">Prestasi Dicapai</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <button
              onClick={scrollToNext}
              className="bg-gradient-to-r from-gen4sa-blue to-gen4sa-navy text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Jelajahi Lebih Lanjut</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gen4sa-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gen4sa-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
