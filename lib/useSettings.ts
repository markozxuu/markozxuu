import { useContext } from 'react';

import { ContextSettings } from './SettingsContext';

const useSettings = () => {
  const { isSound } = useContext(ContextSettings);
  return { isSound };
};

export { useSettings };
