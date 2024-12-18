import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const ThemeContext = createContext();

export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('');

  // Load saved color from localStorage when the app loads
  useEffect(() => {
    const savedColor = localStorage.getItem('globalColor');
    if (savedColor) setSelectedColor(savedColor);
  }, []);

  // Update the color and persist it
  const changeColor = (color) => {
    setSelectedColor(color);
    localStorage.setItem('globalColor', color);
  };

  return (
    <ThemeContext.Provider value={{ selectedColor, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
