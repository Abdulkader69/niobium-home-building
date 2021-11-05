import { useEffect } from 'react';
// import 'tailwindcss/tailwind.css'
import Head from 'next/head';
import { ViewportProvider } from '../src/context/ViewPortContext';
import '../src/assets/css/globals.css';
import Header from '../src/components/Header';

function MyApp({ Component, pageProps, router }) {
  const { route } = router;
  let bodyClassName = '';
  if (route === '/') {
    bodyClassName = 'home-page';
  } else if (route === '/about') {
    bodyClassName = 'about-page';
  } else if (route === '/project/[slug]') {
    bodyClassName = 'project-single-page';
  } 

  // useEffect(() => {
  //   const calculateGlobalRem = () => {
  //     var rem = window.innerWidth * 0.5625 > window.innerHeight ? (window.innerHeight / 1080) * 10 : (window.innerWidth / 1920) * 10; // Ternary operator {if/else} 
  //     document.documentElement.style.setProperty('--rem', rem + 'px');
  //   };
  //   // Trigger on window load function
  //   window.addEventListener('load', function(e){
  //     calculateGlobalRem();
  //   });
  //   // Trigger on window resize function
  //   window.addEventListener('resize', function(e){
  //     calculateGlobalRem();
  //   });
  // });

  return (
    <>
      <Head>
        <title>Niobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewportProvider>
          <div id="page_container" className={`${bodyClassName} overflow-hidden`}>
            <Header/>
            <div className="main_content">
              <Component {...pageProps} />
            </div>
          </div>
      </ViewportProvider>
    </>
  );
}

export default MyApp
