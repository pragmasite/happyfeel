import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1 text-foreground">
                  {t.contact.phone}
                </h3>
                <a
                  href="tel:+41796257269"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +41 79 625 72 69
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1 text-foreground">
                  {t.contact.email}
                </h3>
                <a
                  href="mailto:happyfeelechallens@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors break-all"
                >
                  happyfeelechallens@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1 text-foreground">
                  {t.contact.address}
                </h3>
                <p className="text-muted-foreground">
                  Route de Cossonay 19b
                  <br />
                  1040 Echallens, Switzerland
                </p>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-medium h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.159894747474!2d6.627002!3d46.640323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f35c7c8b7c8b7%3A0x8b7c8b7c8b7c8b7c!2sRoute%20de%20Cossonay%2019b%2C%201040%20Echallens!5e0!3m2!1sfr!2sch!4v1609459200000!5m2!1sfr!2sch"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Happy Feel Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
