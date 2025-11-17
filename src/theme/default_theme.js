import { createContext, useContext } from 'react';

const screen_colors = '#FFC0CB';

const Context = createContext({ screen_colors });

export const ThemeProvider = ({ children }) => {
  return (
    <Context.Provider value={{ screen_colors }}>
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => {
  return useContext(Context);
};