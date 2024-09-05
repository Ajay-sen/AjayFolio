import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Dynamically load the snowfall script
const loadSnowfallScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = '../.././snowfall.min.js'; // Adjust the path as needed
    script.onload = () => resolve(window.snowFall); // Resolve with the snowfall function
    document.body.appendChild(script);
  });
};

const Main = () => {
  useEffect(() => {
    const initializeSnowfall = async () => {
      const snowFall = await loadSnowfallScript();
      if (snowFall) {
        snowFall.snow(document.querySelector("#root"), {
          round: true,
          minSize: 1,
          maxSize: 6,
          shadow:true,
          flakeCount:150,
          flakeColor: '#c7dfea'
        });
      }
    };
    initializeSnowfall();
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
