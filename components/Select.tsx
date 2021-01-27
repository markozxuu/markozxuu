// Packages
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// Icons
import Moon from '@components/icons/Moon';
import Soun from '@components/icons/Sun';
import System from '@components/icons/System';

const Select = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  console.log(theme);
  return (
    <div className="flex items-center relative border dark:border-accent-2 hover:border-black-vercel dark:hover:border-accent-3 transition-colors duration-200 rounded-md mr-2 pl-4">
      <span className="inline-flex absolute -ml-2">
        {theme === 'white' ? <Soun /> : null}
        {theme === 'dark' ? <Moon /> : null}
        {theme === 'system' ? <System /> : null}
      </span>
      <select
        className="dark:text-white bg-transparent text-sm border-none focus:ring-0 focus:border-black pl-4 pr-7"
        onChange={(event) => setTheme(event.target.value)}
        value={theme}
      >
        <option value="white">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};

export default Select;
