import React, { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<any>(
    typeof window !== 'undefined'
      ? document.body.getAttribute('data-theme')
      : 'dark'
  );
  useEffect(() => {
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
