import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: (typeof translations)[Language];
  otherLangs: Language[];
  getLangPath: (lang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  const path = location.pathname;
  let lang: Language = "it";

  if (path.startsWith("/de")) {
    lang = "de";
  } else if (path.startsWith("/en")) {
    lang = "en";
  }

  const t = translations[lang];

  const otherLangs: Language[] = (["it", "de", "en"] as Language[]).filter(l => l !== lang);

  const getLangPath = (targetLang: Language): string => {
    if (targetLang === "it") return "/";
    return `/${targetLang}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, t, otherLangs, getLangPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
