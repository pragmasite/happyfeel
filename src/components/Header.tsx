import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  const navLinks = [
    { href: "#a-propos", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#horaires", label: t.nav.hours },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col gap-0">
          <img
            src="/images/logo.jpg"
            alt="Happy Feel Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild size="sm" className="gap-2">
            <a href="tel:+41796257269">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{t.nav.call}</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <X
              className={`h-6 w-6 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to={otherLangPath}
              className="flex items-center gap-2 text-sm py-2"
              onClick={() => setIsMobileOpen(false)}
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
            <Button asChild className="w-full gap-2">
              <a href="tel:+41796257269">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
