import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Классический маникюр",
      description: "Обработка кутикулы, придание формы, покрытие лаком",
      price: "от 1500 ₽",
      duration: "60 мин",
      icon: "Hand",
    },
    {
      title: "Гель-лак маникюр",
      description: "Стойкое покрытие до 3-х недель с безупречным блеском",
      price: "от 2000 ₽",
      duration: "90 мин",
      icon: "Sparkles",
    },
    {
      title: "Nail-арт",
      description: "Уникальные дизайны: роспись, стразы, градиенты",
      price: "от 2500 ₽",
      duration: "120 мин",
      icon: "Palette",
    },
    {
      title: "Укрепление ногтей",
      description: "Восстановление и укрепление натуральных ногтей",
      price: "от 1800 ₽",
      duration: "75 мин",
      icon: "Shield",
    },
    {
      title: "Педикюр",
      description: "Полный уход за стопами и ногтями на ногах",
      price: "от 2200 ₽",
      duration: "90 мин",
      icon: "Heart",
    },
    {
      title: "SPA-уход",
      description: "Расслабляющие процедуры с маслами и кремами",
      price: "от 1200 ₽",
      duration: "45 мин",
      icon: "Flower",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий спектр услуг для красоты и здоровья ваших ногтей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-pink-100"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    className="h-8 w-8 text-primary"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Icon name="Clock" className="h-4 w-4 mr-1" />
                    {service.duration}
                  </span>
                  <span className="font-semibold text-primary text-lg">
                    {service.price}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
