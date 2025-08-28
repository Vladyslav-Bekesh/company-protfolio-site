"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "@/lib/theme";
import LoadingSpinner from "@/components/LoadingSpinner";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Перевіряємо збережену тему в localStorage
    const savedTheme = localStorage.getItem("theme-mode") as ThemeMode;
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else {
      // Перевіряємо системну тему
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setThemeMode(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme-mode", newTheme);
  };

  // Показуємо loading state до гідратації
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ themeMode: "light", toggleTheme }}>
        <MuiThemeProvider theme={createTheme(lightTheme)}>
          <CssBaseline />
          <LoadingSpinner />
        </MuiThemeProvider>
      </ThemeContext.Provider>
    );
  }

  const theme = createTheme({
    ...(themeMode === "light" ? lightTheme : darkTheme),
    // Додаткові налаштування для стабілізації
    shape: {
      borderRadius: 8,
    },
    spacing: 8,
    // Забезпечуємо стабільність типографіки
    typography: {
      ...(themeMode === "light" ? lightTheme : darkTheme).typography,
      // Додаткові гарантії стабільності
      allVariants: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
