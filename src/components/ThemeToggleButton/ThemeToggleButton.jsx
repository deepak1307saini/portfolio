import React, { useState, useEffect } from 'react';
import styles from './ThemeToggleButton.module.css'; // Importing CSS module

export const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle the theme between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the theme to the root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <></>
  );
};
 