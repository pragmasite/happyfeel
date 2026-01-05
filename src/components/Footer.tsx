import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLangPath } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-2">Happy Feel</h3>
            <p className="text-primary-foreground/80 text-sm">
              {t.footer.tagline}
            </p>
            <p className="text-primary-foreground/70 text-sm mt-2">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <nav className="space-y-2">
              <a
                href="#a-propos"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#services"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.services}
              </a>
              <a
                href="#galerie"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.gallery}
              </a>
              <a
                href="#horaires"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.hours}
              </a>
              <a
                href="#contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <a
              href="tel:+41796257269"
              className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              +41 79 625 72 69
            </a>
            <a
              href="mailto:happyfeelechallens@gmail.com"
              className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              happyfeelechallens@gmail.com
            </a>
            <p className="text-primary-foreground/80 text-sm mt-4">
              Route de Cossonay 19b
              <br />
              1040 Echallens, CH
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Happy Feel. {t.footer.copyright}
            </p>
            <Link
              to={otherLangPath}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Change Language
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
