import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" className="h-6 w-6 text-primary" />
              <span className="font-montserrat font-bold text-xl">
                Nail Studio
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Профессиональный маникюр и nail-арт в уютной атмосфере. Превращаем
              ваши ногти в произведение искусства.
            </p>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Контакты
            </h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>ул. Красивая, 25, Москва</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" />
                <span>+7-958-635-89-75 Кира🥰</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="h-4 w-4" />
                <span>Пн-Пт: 9:00-21:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Мы в соцсетях
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Phone" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Nail Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
