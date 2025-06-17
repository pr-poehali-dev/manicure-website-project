import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      details: ["ул. Красивая, 25", "Москва, 123456"],
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: ["+7 (999) 123-45-67", "+7 (999) 765-43-21"],
    },
    {
      icon: "Clock",
      title: "Режим работы",
      details: ["Пн-Пт: 9:00 - 21:00", "Сб-Вс: 10:00 - 20:00"],
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-4">
            Контакты и запись
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом или оставьте заявку онлайн
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-pink-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon
                          name={info.icon as any}
                          className="h-5 w-5 text-primary"
                        />
                      </div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="flex-1">
                <Icon name="Instagram" className="h-5 w-5 mr-2" />
                Instagram
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <Card className="border-pink-100">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl text-center">
                Записаться на процедуру
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Желаемая дата и время" />
                <Textarea
                  placeholder="Какую услугу хотите получить? Есть ли особые пожелания?"
                  rows={4}
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Отправить заявку
                </Button>
              </form>
              <p className="text-sm text-gray-500 text-center mt-4">
                Мы перезвоним вам в течение 30 минут для подтверждения записи
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
