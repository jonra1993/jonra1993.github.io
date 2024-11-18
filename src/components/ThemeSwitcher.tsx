import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Check local storage for the theme and apply it
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      setTheme('light');
      document.documentElement.classList.add('light');
    }
  }, []);

  // Toggle theme and update local storage
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // Update the document class for theme switching
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <motion.button
      id="theme-btn"
      aria-label="Toggle Dark Mode"
      type="button"
      className="ml-1 mr-1 h-8 w-8 rounded p-1"
      whileTap={{
        scale: 0.7,
        rotate: 360,
        transition: { duration: 0.2 },
      }}
      whileHover={{ scale: 1.2 }}
      onClick={handleThemeToggle}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-gray-900 dark:text-gray-100" />
      ) : (
        <Moon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
      )}
    </motion.button>
  );
};

export default ThemeSwitch;
