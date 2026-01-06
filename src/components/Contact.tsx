import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 91 923 45 67",
      href: "tel:+41919234567",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "andrea.piccinato77@gmail.com",
      href: "mailto:andrea.piccinato77@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Via del Tiglio 13, 6512 Giubiasco, CH",
      href: "https://maps.google.com/?q=Via+del+Tiglio+13,+6512+Giubiasco",
    },
  ];

  return (
    <section id="contatti" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-4">{t.contact.title1}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.title2}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground">{t.contact.description}</p>

            <div className="space-y-6">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <a
                    key={i}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{info.label}</p>
                      <p className="text-lg font-medium text-foreground mt-1">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <Button asChild size="lg" className="w-full gap-2">
              <a href="tel:+41919234567">
                <Phone className="h-5 w-5" />
                {t.contact.callNow}
              </a>
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-medium h-[400px] md:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.4234567891234!2d9.000685!3d46.171615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4784e8f8d8d8d8d9%3A0x8d8d8d8d8d8d8d8d!2sVia%20del%20Tiglio%2013%2C%206512%20Giubiasco!5e0!3m2!1sit!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
