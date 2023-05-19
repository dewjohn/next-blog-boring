import React, { useEffect, useState } from 'react';

const getTheme = () =>
  window.localStorage.getItem('theme') ||
  document.body.getAttribute('data-theme');

const useTheme = () => {
  const [theme, setTheme] = useState<any>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(() => getTheme());
    }
    const handleThemeChange = () => {
      const currentTheme = document.body.getAttribute('data-theme');
      setTheme(() => currentTheme);
    };
    const themeObserver = new MutationObserver(() => {
      handleThemeChange();
    });
    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    return () => {
      themeObserver.disconnect();
    };
  }, []);
  return theme;
};

export default useTheme;
