import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="h-6 w-6 text-primary" />
            <span className="font-montserrat font-bold text-xl text-gray-800">
              Nail Studio
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90"
          >
            <Icon name="Calendar" className="h-4 w-4 mr-2" />
            Записаться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
