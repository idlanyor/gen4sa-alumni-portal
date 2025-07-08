import { ArrowDown, Users, Calendar, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gen4sa-cream via-background to-gen4sa-blue/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gen4sa-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gen4sa-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gen4sa-navy rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div data-aos="fade-right" data-aos-delay="0">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-gen4sa-navy mb-4 leading-tight">
                Gen<span className="text-gen4sa-blue">4</span>sa
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gen4sa-blue to-gen4sa-gold mb-6"></div>
            </div>

            {/* Subtitle */}
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="font-poppins text-lg md:text-xl text-muted-foreground mb-3 font-medium">
                Generasi Alumni
              </h2>
              <h3 className="font-poppins text-xl md:text-2xl lg:text-3xl text-gen4sa-navy mb-6 font-semibold">
                SMP Negeri 4 Satap Karangjambu
              </h3>
            </div>

            {/* Description */}
            <div data-aos="fade-right" data-aos-delay="400">
              <p className="font-poppins text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                Menghubungkan generasi alumni dalam satu ikatan yang kuat, berbagi cerita, prestasi, 
                dan membangun masa depan yang lebih baik bersama.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                <div className="w-12 h-12 bg-gen4sa-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-gen4sa-blue" />
                </div>
                <div className="font-bold text-xl text-gen4sa-navy mb-1">500+</div>
                <div className="text-xs text-muted-foreground font-medium">Alumni</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="700">
                <div className="w-12 h-12 bg-gen4sa-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-gen4sa-gold" />
                </div>
                <div className="font-bold text-xl text-gen4sa-navy mb-1">25+</div>
                <div className="text-xs text-muted-foreground font-medium">Tahun</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="800">
                <div className="w-12 h-12 bg-gen4sa-navy/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-gen4sa-navy" />
                </div>
                <div className="font-bold text-xl text-gen4sa-navy mb-1">100+</div>
                <div className="text-xs text-muted-foreground font-medium">Prestasi</div>
              </div>
            </div>

            {/* CTA Button */}
            <div data-aos="fade-right" data-aos-delay="900">
              <button
                onClick={scrollToNext}
                className="bg-gradient-to-r from-gen4sa-blue to-gen4sa-navy text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Jelajahi Lebih Lanjut</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Right Content - Stacked Images */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="300">
            <div className="relative w-full max-w-md">
              {/* Background decorative circle */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gen4sa-gold/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Main stacked images container */}
              <div className="relative">
                {/* Image 1 - Back */}
                <div 
                  className="absolute top-8 left-8 w-48 h-64 bg-gradient-to-br from-gen4sa-blue to-gen4sa-navy rounded-2xl shadow-2xl transform rotate-6 animate-pulse"
                  data-aos="zoom-in" 
                  data-aos-delay="500"
                >
                  <div className="w-full h-full bg-gen4sa-blue/90 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Users className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Alumni Network</p>
                    </div>
                  </div>
                </div>

                {/* Image 2 - Middle */}
                <div 
                  className="absolute top-4 left-16 w-48 h-64 bg-gradient-to-br from-gen4sa-gold to-yellow-600 rounded-2xl shadow-2xl transform -rotate-3 z-10"
                  data-aos="zoom-in" 
                  data-aos-delay="700"
                >
                  <div className="w-full h-full bg-gen4sa-gold/90 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Award className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Achievements</p>
                    </div>
                  </div>
                </div>

                {/* Image 3 - Front */}
                <div 
                  className="relative w-48 h-64 bg-gradient-to-br from-gen4sa-navy to-blue-900 rounded-2xl shadow-2xl transform rotate-2 z-20 hover:scale-105 transition-transform duration-300"
                  data-aos="zoom-in" 
                  data-aos-delay="900"
                >
                  <div className="w-full h-full bg-gen4sa-navy/90 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Calendar className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Events & Reunions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gen4sa-gold rounded-full animate-bounce" data-aos="fade-in" data-aos-delay="1100"></div>
              <div className="absolute bottom-4 -left-4 w-6 h-6 bg-gen4sa-blue rounded-full animate-pulse" data-aos="fade-in" data-aos-delay="1200"></div>
            </div>
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