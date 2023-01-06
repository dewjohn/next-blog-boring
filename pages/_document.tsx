import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const setInitialTheme = `(function () {
    try {
      let mode = localStorage.getItem('mode');
      let supportDarkMode =
        window.matchMedia('(prefers-color-scheme: dark)').matches === true;
      if (!mode && supportDarkMode) document.body.classList.add('dark');
      if (!mode) return;
      document.body.classList.add(mode);
    } catch (e) {}
  })()`;
  return (
    <Html>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
