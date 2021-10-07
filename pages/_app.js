import 'tailwindcss/tailwind.css'
import Head from 'next/head';
import { ViewportProvider } from '../src/context/ViewPortContext';
import '../src/assets/css/globals.css';

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

  return (
    <>
      <Head>
        <title>ENVIRA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ViewportProvider>
          <div id="page_container" className={`${bodyClassName} overflow-hidden`}>
            <div className="main_content mt-[66px] md:mt-[53px] lg:mt-[8.3rem] mb-[35px] lg:mb-[4.87rem] lg:px-[5rem] px-[15px]">
              <Component {...pageProps} />
            </div>
          </div>
      </ViewportProvider>
    </>
  );
}

export default MyApp
