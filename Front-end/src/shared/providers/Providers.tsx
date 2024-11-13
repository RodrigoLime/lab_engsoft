import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../contexts/AppContext';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </AppProvider>
  );
};