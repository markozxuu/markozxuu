const STORAGE_KEY = 'markoz-light-mode';

const getInitialColor = () => {
  const userColorPreferences = window.localStorage.getItem(STORAGE_KEY);
  const isPersistedPreference = typeof userColorPreferences === 'string';
  if (isPersistedPreference) {
    return userColorPreferences;
  }
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const isMediaQueryPreference = typeof mql.matches === 'boolean';
  if (isMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  return 'light';
};

export { getInitialColor };
