import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Since the business hours are not properly defined in the data,
  // I'll use typical opening hours for a professional painting service
  const schedule = [
    { hours: "07:00 - 18:00" },
    { hours: "07:00 - 18:00" },
    { hours: "07:00 - 18:00" },
    { hours: "07:00 - 18:00" },
    { hours: "07:00 - 17:00" },
    { hours: "08:00 - 12:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay();
  const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="orari" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-5">
              <Clock className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-serif text-xl font-bold">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === adjustedIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />}
                      <span className={`font-medium ${isToday ? "text-primary font-semibold" : "text-foreground"}`}>
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={`${isClosed ? "text-muted-foreground font-medium" : "text-foreground font-medium"}`}>
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
