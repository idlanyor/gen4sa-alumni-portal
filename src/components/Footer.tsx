
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gen4sa-navy text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2" data-aos="fade-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-gen4sa-blue to-gen4sa-gold rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">Gen4sa</h3>
                <p className="text-gray-300 text-sm">Generasi Alumni SMP Negeri 4</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Menghubungkan alumni SMP Negeri 4 Satap Karangjambu dalam satu ikatan persaudaraan 
              yang kuat untuk membangun masa depan yang lebih baik bersama.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gen4sa-blue/20 hover:bg-gen4sa-blue rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gen4sa-blue/20 hover:bg-gen4sa-blue rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gen4sa-blue/20 hover:bg-gen4sa-blue rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gen4sa-blue/20 hover:bg-gen4sa-blue rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-playfair text-lg font-bold mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior: 'smooth'})}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Galeri
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('alumni')?.scrollIntoView({behavior: 'smooth'})}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Alumni
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-playfair text-lg font-bold mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gen4sa-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">SMP Negeri 4 Satap Karangjambu</p>
                  <p className="text-gray-400 text-sm">Jl. Pendidikan No. 123, Karangjambu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gen4sa-gold" />
                <div>
                  <p className="text-gray-300">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gen4sa-gold" />
                <div>
                  <p className="text-gray-300">info@gen4sa.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Gen4sa - Generasi Alumni SMP Negeri 4 Satap Karangjambu. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
