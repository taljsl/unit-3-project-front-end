import { useState, useEffect } from "react";

const useColorScheme = () => {
  const getCurrentScheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'no-preference';
  };

  const [colorScheme, setColorScheme] = useState(getCurrentScheme);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleChange = () => {
      setColorScheme(getCurrentScheme());
    };

    // Attach listeners to both dark and light media queries
    darkMediaQuery.addEventListener('change', handleChange);
    lightMediaQuery.addEventListener('change', handleChange);

    return () => {
      // Cleanup listeners
      darkMediaQuery.removeEventListener('change', handleChange);
      lightMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return colorScheme;
};

export default useColorScheme;
