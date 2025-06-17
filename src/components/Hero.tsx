import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-white to-pink-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
              Красота ваших
              <span className="text-primary"> ногтей</span> — наша страсть
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональный маникюр и nail-арт в уютной атмосфере. Превращаем
              ваши ногти в произведение искусства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
              >
                <Icon name="Calendar" className="h-5 w-5 mr-2" />
                Записаться на маникюр
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
              >
                <Icon name="Image" className="h-5 w-5 mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop"
                alt="Профессиональный маникюр"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-pink-300/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
