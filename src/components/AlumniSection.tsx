
import { Star, Quote, Briefcase, GraduationCap } from 'lucide-react';

const AlumniSection = () => {
  const featuredAlumni = [
    {
      id: 1,
      name: "Sari Dewi Lestari",
      graduation: "Angkatan 2018",
      current: "Software Engineer di Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      testimony: "Gen4sa membantu saya tetap terhubung dengan teman-teman dan membuka peluang karir yang tidak pernah saya bayangkan.",
      achievement: "Best Graduate 2023"
    },
    {
      id: 2,
      name: "Ahmad Rizki Pratama",
      graduation: "Angkatan 2019",
      current: "Entrepreneur & Founder StartupXYZ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      testimony: "Jaringan alumni yang solid memberi saya kepercayaan diri untuk memulai bisnis sendiri dan mendapat dukungan penuh.",
      achievement: "Young Entrepreneur Award 2024"
    },
    {
      id: 3,
      name: "Indira Kusuma Putri",
      graduation: "Angkatan 2017",
      current: "Medical Doctor at RS Harapan",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      testimony: "Semangat kebersamaan di Gen4sa mengajarkan saya pentingnya empati dan pelayanan kepada sesama.",
      achievement: "Outstanding Doctor 2023"
    }
  ];

  const alumniStats = [
    { number: 45, label: "Dokter & Tenaga Medis", icon: "🏥" },
    { number: 78, label: "Profesional IT", icon: "💻" },
    { number: 32, label: "Entrepreneur", icon: "💼" },
    { number: 56, label: "Pendidik", icon: "👨‍🏫" },
    { number: 89, label: "Lainnya", icon: "🌟" }
  ];

  return (
    <section id="alumni" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gen4sa-navy mb-6">
            Alumni Berprestasi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gen4sa-blue to-gen4sa-gold mx-auto mb-6"></div>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Kebanggaan kami adalah prestasi alumni yang tersebar di berbagai bidang profesi
          </p>
        </div>

        {/* Alumni Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {alumniStats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:bg-gen4sa-blue/5 transition-colors" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-bold text-2xl text-gen4sa-navy mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Alumni */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredAlumni.map((alumni, index) => (
            <div key={alumni.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="relative">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-gen4sa-gold text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>Featured</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gen4sa-navy mb-2">
                  {alumni.name}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm">{alumni.graduation}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">{alumni.current}</span>
                </div>
                
                <div className="bg-gen4sa-blue/5 rounded-lg p-4 mb-4">
                  <Quote className="w-6 h-6 text-gen4sa-blue mb-2" />
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    "{alumni.testimony}"
                  </p>
                </div>
                
                <div className="bg-gen4sa-gold/10 rounded-lg p-3 text-center">
                  <div className="text-gen4sa-navy font-semibold text-sm">
                    🏆 {alumni.achievement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gen4sa-blue to-gen4sa-navy rounded-2xl p-8 md:p-12 text-center text-white" data-aos="fade-up">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Bergabunglah dengan Kami!
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Jadilah bagian dari jaringan alumni yang solid dan saling mendukung
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gen4sa-navy px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Daftar Alumni
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gen4sa-navy transition-colors">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
