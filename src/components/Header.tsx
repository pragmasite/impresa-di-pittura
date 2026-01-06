import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, lang, otherLangs, getLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>Piccinato</span>
          <span className={`text-xs tracking-widest font-semibold ${isScrolled ? "text-primary" : "text-white/80"}`}>{t.nav.profession}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#chi-siamo" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.aboutUs}
          </a>
          <a href="#servizi" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.services}
          </a>
          <a href="#galleria" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.gallery}
          </a>
          <a href="#orari" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.hours}
          </a>
          <a href="#contatti" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/20">
            <Globe className={`h-4 w-4 ${isScrolled ? "text-primary" : "text-white/60"}`} />
            <select
              value={lang}
              onChange={(e) => {
                window.location.href = getLangPath(e.target.value as any);
              }}
              className={`text-xs font-medium bg-transparent border-0 cursor-pointer outline-none ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              <option value="it">ITALIANO</option>
              <option value="de">DEUTSCH</option>
              <option value="en">ENGLISH</option>
            </select>
          </div>

          <Button asChild className="gap-2">
            <a href="tel:+41919234567">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${isScrolled ? "hover:bg-muted" : "hover:bg-white/10"}`}
          >
            {isMobileMenuOpen ? (
              <X className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#chi-siamo" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              {t.nav.aboutUs}
            </a>
            <a href="#servizi" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              {t.nav.services}
            </a>
            <a href="#galleria" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              {t.nav.gallery}
            </a>
            <a href="#orari" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              {t.nav.hours}
            </a>
            <a href="#contatti" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              {t.nav.contact}
            </a>

            <div className="pt-3 border-t border-border">
              <label className="flex items-center gap-2 text-xs font-medium text-foreground mb-3">
                <Globe className="h-4 w-4" />
                {t.nav.profession === "IMPRESA DI PITTURA" ? "Lingua" : t.nav.profession === "MALERBETRIEB" ? "Sprache" : "Language"}
              </label>
              <select
                value={lang}
                onChange={(e) => {
                  window.location.href = getLangPath(e.target.value as any);
                }}
                className="w-full text-xs font-medium bg-muted border border-border rounded-lg px-3 py-2 text-foreground cursor-pointer"
              >
                <option value="it">ITALIANO</option>
                <option value="de">DEUTSCH</option>
                <option value="en">ENGLISH</option>
              </select>
            </div>

            <Button asChild className="w-full gap-2 mt-3">
              <a href="tel:+41919234567">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
