const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=400&fit=crop",
      title: "Французский маникюр",
    },
    {
      url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&h=400&fit=crop",
      title: "Nail-арт с цветами",
    },
    {
      url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
      title: "Градиентный дизайн",
    },
    {
      url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
      title: "Классический красный",
    },
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop",
      title: "Стразы и блёстки",
    },
    {
      url: "https://images.unsplash.com/photo-1609205838-b5c19b0c2e89?w=400&h=400&fit=crop",
      title: "Минимализм",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-16 bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-4">
            Галерея работ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите на наши лучшие работы и вдохновитесь для вашего
            следующего маникюра
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-montserrat font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
