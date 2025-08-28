'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { uk } from '@/lib/locales/uk';
import { en } from '@/lib/locales/en';
import LoadingSpinner from '@/components/LoadingSpinner';

type Locale = 'uk' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  formatDate: (date: Date) => string;
  formatNumber: (number: number) => string;
  formatCurrency: (amount: number, currency?: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

interface LocaleProviderProps {
  children: ReactNode;
}

const locales = { uk, en };

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('uk');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Перевіряємо збережену локаль
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'uk' || savedLocale === 'en')) {
      setLocaleState(savedLocale);
    } else {
      // Перевіряємо мову браузера
      const browserLang = navigator.language;
      if (browserLang.startsWith('uk')) {
        setLocaleState('uk');
      } else {
        setLocaleState('en');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // Показуємо loading state до гідратації
  if (!mounted) {
    return (
      <LocaleContext.Provider value={{ 
        locale: 'uk', 
        setLocale, 
        t: (key: string) => key, 
        formatDate: (date: Date) => date.toLocaleDateString('uk'),
        formatNumber: (number: number) => number.toString(),
        formatCurrency: (amount: number) => `${amount} грн`
      }}>
        <LoadingSpinner />
      </LocaleContext.Provider>
    );
  }

  // Функція для отримання перекладів
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = locales[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Повертаємо ключ, якщо переклад не знайдено
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  // Форматування дати
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat(locale === 'uk' ? 'uk-UA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  // Форматування чисел
  const formatNumber = (number: number): string => {
    return new Intl.NumberFormat(locale === 'uk' ? 'uk-UA' : 'en-US').format(number);
  };

  // Форматування валюти
  const formatCurrency = (amount: number, currency = 'UAH'): string => {
    return new Intl.NumberFormat(locale === 'uk' ? 'uk-UA' : 'en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  return (
    <LocaleContext.Provider value={{
      locale,
      setLocale,
      t,
      formatDate,
      formatNumber,
      formatCurrency,
    }}>
      {children}
    </LocaleContext.Provider>
  );
};
