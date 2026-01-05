import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground mb-6">{t.about.p1}</p>
            <p className="text-lg text-muted-foreground">{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-8"
          >
            {[
              { value: "10+", label: t.about.stat1 },
              { value: "500+", label: t.about.stat2 },
              { value: "99%", label: t.about.stat3 },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-card rounded-lg shadow-soft">
                <div className="text-4xl font-serif text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t.about.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="p-6 bg-card rounded-lg shadow-soft"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="font-serif text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
