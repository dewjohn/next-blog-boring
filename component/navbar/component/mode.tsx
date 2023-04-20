import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export default function Mode() {
  const [activeTheme, setActiveTheme] = useState<string>(
    document.body.dataset.theme || 'light'
  );
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  if (typeof window !== 'undefined') {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        setActiveTheme(() => newColorScheme);
      });
  }

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', activeTheme);
    }
  }, [activeTheme]);
  return (
    <span onClick={() => setActiveTheme(inactiveTheme)}>
      {activeTheme === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
    </span>
  );
}
