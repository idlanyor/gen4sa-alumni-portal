
import { School, Heart, Target, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gen4sa-navy mb-6">
            Tentang Gen4sa
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gen4sa-blue to-gen4sa-gold mx-auto mb-6"></div>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Organisasi alumni yang menghubungkan generasi lulusan SMP Negeri 4 Satap Karangjambu 
            dalam satu ikatan persaudaraan yang kuat dan berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="font-playfair text-3xl font-bold text-gen4sa-navy mb-6">
              Sejarah & Visi Kami
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Gen4sa (Generasi Alumni SMP Negeri 4 Satap Karangjambu) didirikan dengan semangat 
              untuk menjaga silaturahmi antar alumni dan memberikan kontribusi positif bagi 
              perkembangan pendidikan di daerah.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Kami percaya bahwa kekuatan alumni terletak pada kolaborasi dan dedikasi untuk 
              memajukan almamater serta membantu generasi penerus mencapai prestasi yang lebih tinggi.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="300">
                <div className="w-12 h-12 bg-gen4sa-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-gen4sa-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gen4sa-navy mb-2">Kebersamaan</h4>
                  <p className="text-gray-600 text-sm">Membangun ikatan yang kuat antar alumni</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="400">
                <div className="w-12 h-12 bg-gen4sa-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-gen4sa-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gen4sa-navy mb-2">Prestasi</h4>
                  <p className="text-gray-600 text-sm">Mendorong pencapaian terbaik setiap alumni</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="bg-gradient-to-br from-gen4sa-blue/10 to-gen4sa-gold/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <School className="w-24 h-24 text-gen4sa-blue mx-auto mb-4" />
                <h4 className="font-playfair text-2xl font-bold text-gen4sa-navy mb-2">
                  SMP Negeri 4 Satap
                </h4>
                <p className="text-gen4sa-navy font-medium">Karangjambu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gen4sa-blue/5 to-gen4sa-blue/10 rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-gen4sa-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-gen4sa-navy mb-4">
              Menghubungkan
            </h3>
            <p className="text-gray-600">
              Memfasilitasi komunikasi dan interaksi antar alumni dari berbagai angkatan
            </p>
          </div>

          <div className="bg-gradient-to-br from-gen4sa-gold/5 to-gen4sa-gold/10 rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-gen4sa-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <School className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-gen4sa-navy mb-4">
              Memajukan
            </h3>
            <p className="text-gray-600">
              Berkontribusi dalam pengembangan fasilitas dan kualitas pendidikan sekolah
            </p>
          </div>

          <div className="bg-gradient-to-br from-gen4sa-navy/5 to-gen4sa-navy/10 rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-gen4sa-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-gen4sa-navy mb-4">
              Menginspirasi
            </h3>
            <p className="text-gray-600">
              Memberikan motivasi dan inspirasi kepada adik-adik juniornya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
