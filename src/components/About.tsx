import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "20+", label: t.about.stat1 },
    { value: "500+", label: t.about.stat2 },
    { value: "99%", label: t.about.stat3 },
  ];

  return (
    <section id="chi-siamo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">{t.about.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-4">{t.about.title1}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.about.title2}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/img-6.jpg"
              alt="Andrea Piccinato"
              className="rounded-2xl shadow-medium w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">{t.about.p1}</p>
            <p className="text-lg text-foreground leading-relaxed">{t.about.p2}</p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.about.features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="w-6 h-6 rounded-full bg-primary/30" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
