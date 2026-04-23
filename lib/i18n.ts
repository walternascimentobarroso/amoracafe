export type Language = "pt" | "en";

export const LANGUAGE_STORAGE_KEY = "amoracafe-language";
export const DEFAULT_LANGUAGE: Language = "pt";

export interface Translations {
  header: {
    home: string;
    menu: string;
    languageLabel: string;
  };
  home: {
    location: string;
    heroDescription: string;
    menuButton: string;
    localOrdersOnly: string;
    highlights: {
      coffeePrice: string;
      nataFresh: string;
      nearStation: string;
      nataIconAlt: string;
    };
    openingHoursTitle: string;
    openingHours: Array<{ day: string; time: string }>;
    mapTitle: string;
  };
  menu: {
    title: string;
    subtitle: string;
  };
  theme: {
    toggleToDark: string;
    toggleToLight: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    header: {
      home: "Início",
      menu: "Menu",
      languageLabel: "Idioma"
    },
    home: {
      location: "Guimarães, Portugal",
      heroDescription:
        "Café artesanal, pastelaria fresca e pequenos-almoços acolhedores no coração de Guimarães.",
      menuButton: "Ver Menu completo",
      localOrdersOnly: "Pedidos apenas no local.",
      highlights: {
        coffeePrice: "Café a partir de €0.90",
        nataFresh: "Pastel de nata fresco todos os dias",
        nearStation: "Em frente à estação de comboios Guimarães",
        nataIconAlt: "Ícone de pastel de nata"
      },
      openingHoursTitle: "Horário",
      openingHours: [
        { day: "Segunda a Sexta", time: "07:00 – 19:00" },
        { day: "Sábado", time: "08:00 – 20:00" },
        { day: "Domingo", time: "Fechado" }
      ],
      mapTitle: "Localização Amora Café"
    },
    menu: {
      title: "Menu",
      subtitle: "Consulte os preços atualizados da nossa cafetaria e pastelaria."
    },
    theme: {
      toggleToDark: "Ativar modo escuro",
      toggleToLight: "Ativar modo claro"
    }
  },
  en: {
    header: {
      home: "Home",
      menu: "Menu",
      languageLabel: "Language"
    },
    home: {
      location: "Guimaraes, Portugal",
      heroDescription:
        "Artisanal coffee, fresh pastries, and cozy breakfasts in the heart of Guimaraes.",
      menuButton: "View full menu",
      localOrdersOnly: "Orders available on-site only.",
      highlights: {
        coffeePrice: "Coffee from EUR 0.90",
        nataFresh: "Fresh pastel de nata every day",
        nearStation: "In front of Guimaraes train station",
        nataIconAlt: "Pastel de nata icon"
      },
      openingHoursTitle: "Opening hours",
      openingHours: [
        { day: "Monday to Friday", time: "07:00 – 19:00" },
        { day: "Saturday", time: "08:00 – 20:00" },
        { day: "Sunday", time: "Closed" }
      ],
      mapTitle: "Amora Cafe location"
    },
    menu: {
      title: "Menu",
      subtitle: "Check the latest prices from our coffee and pastry selection."
    },
    theme: {
      toggleToDark: "Enable dark mode",
      toggleToLight: "Enable light mode"
    }
  }
};

export function getBrowserDefaultLanguage(): Language {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  return browserLanguage.startsWith("pt") ? "pt" : "en";
}
