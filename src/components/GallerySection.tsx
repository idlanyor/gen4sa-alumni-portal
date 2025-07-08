
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'reunion', name: 'Reuni' },
    { id: 'graduation', name: 'Wisuda' },
    { id: 'activities', name: 'Kegiatan' },
    { id: 'achievements', name: 'Prestasi' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Reuni Akbar 2024",
      description: "Pertemuan alumni angkatan 2018-2020",
      category: "reunion",
      date: "15 Agustus 2024",
      location: "Aula SMP Negeri 4 Satap Karangjambu"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      title: "Workshop Teknologi",
      description: "Pelatihan coding untuk adik-adik kelas",
      category: "activities",
      date: "22 Juli 2024",
      location: "Lab Komputer Sekolah"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      title: "Seminar Karir",
      description: "Sharing pengalaman dunia kerja",
      category: "activities",
      date: "10 Juni 2024",
      location: "Aula Sekolah"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      title: "Prestasi Alumni",
      description: "Alumni berprestasi di berbagai bidang",
      category: "achievements",
      date: "5 Mei 2024",
      location: "Jakarta"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      title: "Bakti Sosial",
      description: "Kegiatan sosial untuk masyarakat sekitar",
      category: "activities",
      date: "20 April 2024",
      location: "Desa Karangjambu"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Wisuda Angkatan 2024",
      description: "Pelepasan siswa kelas 9",
      category: "graduation",
      date: "25 Mei 2024",
      location: "Aula SMP Negeri 4 Satap Karangjambu"
    }
  ];

  const filteredItems = currentCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gen4sa-navy mb-6">
            Galeri & Dokumentasi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gen4sa-blue to-gen4sa-gold mx-auto mb-6"></div>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Kumpulan momen berharga dan dokumentasi kegiatan alumni Gen4sa
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentCategory === category.id
                  ? 'bg-gen4sa-blue text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gen4sa-blue/10 hover:text-gen4sa-blue'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gen4sa-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate max-w-32">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={filteredItems[selectedImage].src}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-gen4sa-navy mb-2">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {filteredItems[selectedImage].description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredItems[selectedImage].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{filteredItems[selectedImage].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
