import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col mb-4">
              <span className="font-serif text-xl font-bold">Piccinato</span>
              <span className="text-xs tracking-widest opacity-80">{t.footer.tagline}</span>
            </div>
            <p className="text-sm opacity-80">{t.footer.description}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#chi-siamo" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a href="#servizi" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galleria" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#orari" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contatti" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg font-bold mb-4">{t.footer.about}</h4>
            <div className="space-y-3 text-sm">
              <p className="opacity-80">
                <span className="font-semibold">Email:</span>
                <br />
                <a href="mailto:andrea.piccinato77@gmail.com" className="hover:opacity-100 transition-opacity">
                  andrea.piccinato77@gmail.com
                </a>
              </p>
              <p className="opacity-80">
                <span className="font-semibold">Phone:</span>
                <br />
                <a href="tel:+41919234567" className="hover:opacity-100 transition-opacity">
                  +41 91 923 45 67
                </a>
              </p>
              <p className="opacity-80">
                <span className="font-semibold">Address:</span>
                <br />
                Via del Tiglio 13<br />
                6512 Giubiasco, CH
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>© 2024 Impresa Piccinato Color. {t.footer.copyright}</p>
            <p>Professional Painting & Decoration Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
