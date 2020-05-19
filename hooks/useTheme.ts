// Packages
import { useState, useCallback, useEffect } from 'react';

// Utils
import { getInitialColor } from '../lib/utils/getInitialColor';

const STORAGE_KEY = 'markoz-light-mode';

const setLightMode = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, 'light');
    document.querySelector('html')?.classList.add('light');
  } catch (err) {
    console.error('Could not get value of localStorage');
    console.error(err);
  }
};

const setDarkMode = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, 'dark');
    document.querySelector('html')?.classList.remove('light');
  } catch (err) {
    console.error('Could not get value of localStorage');
    console.error(err);
  }
};

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>('');
  useEffect(() => {
    setTheme(getInitialColor);
  }, []);
  const toggleTheme = () => {
    if (theme === 'dark') {
      setLightMode();
      setTheme('light');
    } else {
      setDarkMode();
      setTheme('dark');
    }
  };
  const memoizedTheme = useCallback(toggleTheme, [theme]);
  return {
    theme,
    memoizedTheme,
  };
};

export { useTheme };
