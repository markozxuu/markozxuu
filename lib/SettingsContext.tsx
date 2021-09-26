import { useState, createContext } from 'react';

export const ContextSettings = createContext<any>({});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [isSound, setSound] = useState<boolean>(true);
  return (
    <ContextSettings.Provider value={{ isSound, setSound }}>
      {children}
    </ContextSettings.Provider>
  );
}
