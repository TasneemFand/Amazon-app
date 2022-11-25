import { FC, useState, createContext, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';
import React from 'react';
import * as locales from '@mui/material/locale';

type ThemeContext = {
  themeName: string;
  locale: string;
  setLocale: (locale: keyof typeof locales) => void;
  setThemeName: (themeName: string) => void;
};
export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const ThemeProviderWrapper: FC = (props) => {
  const [themeName, _setThemeName] = useState('PureLightTheme');
  const [locale, _setLocale] = useState<keyof typeof locales>('enUS');

  useEffect(() => {
    const curThemeName =
      window.localStorage.getItem('appTheme') || 'PureLightTheme';
    _setThemeName(curThemeName);
  }, []);

  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    window.localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme]
  );

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider
        value={{
          themeName: themeName,
          locale: locale,
          setThemeName: setThemeName,
          setLocale: _setLocale
        }}
      >
        <ThemeProvider theme={themeWithLocale}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
