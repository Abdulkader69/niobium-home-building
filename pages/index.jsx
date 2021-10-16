import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {

  // gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect( () => {
    const element = ref.current;
    let tlPreloader = gsap.timeline({ 
      paused: false,
      onComplete: () => {
          element.querySelector(".preloader-bg").classList.add('loaded_mod');
          heroAnimTL.play();
      }
    });

    tlPreloader
    .fromTo(['.preloader-bg', '.preloader-bg-inner', '.preloader-bg-inner1', '.preloader-bg-inner2'], {
      xPercent: -100,
      opacity: 1,
    }, {
      xPercent: 100,
      ease: 'none',
      duration: 1,
      opacity: 1,
    })

    heroAnimTL = gsap.timeline({
      paused: true,
    })

    let heroAnimTL =  gsap.timeline();
    
    heroAnimTL
    .fromTo(['.image-wrap', '.hero-image'], {
      xPercent: gsap.utils.wrap([-100, 100]),
      yPercent: gsap.utils.wrap([-100, 100]),
      opacity: gsap.utils.wrap([0, 1]),
    }, {
      xPercent: gsap.utils.wrap([0, 0]),
      yPercent: gsap.utils.wrap([0, 0]),
      opacity: gsap.utils.wrap([1, 1]),
      ease: 'none',
      delay: 1.5,
    })

    .fromTo('.hero-content-stagger', {
      opacity: 0,
      y: -60
    }, {
      opacity: 1,
      y: 0,
      stagger: .10,
    })

  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".line"), {
      scale: 0,
      ease: "none",
      // scrollTrigger: {
      //   trigger: element.querySelector(".third"),
      //   scrub: true,
      //   start: "top bottom",
      //   end: "top top"
      // }
    });
  }, []);


  return (
    <div className="home-page-wrapper" ref={ref}>

      <div className="preloader-bg w-full h-screen fixed z-50 top-0 left-0 bg-red-300">
        <div className="preloader-bg-inner absolute h-full w-full z-40 top-0 left-0 bg-yellow-400"></div>
        <div className="preloader-bg-inner1 absolute h-full w-full z-40 top-0 left-0 bg-green-500"></div>
        <div className="preloader-bg-inner1 absolute h-full w-full z-40 top-0 left-0 bg-pink-600"></div>
      </div>
      
      <div className="section hero-section h-screen overflow-hidden">
        <div className="flex flex-wrap">
          <div className="w-1/2 relative">
            <div className="image-wrap relative h-full top-0 left-0 w-full origin-top-left overflow-hidden">
              <div className="hero-image block w-full h-full">
                <img className="w-full h-full object-cover" src="http://niobium-home-building.codegaints.com/wp-content/uploads/2021/10/kader2.jpg" alt="hero-image" />
              </div>
            </div>
          </div>
          <div className="w-1/2 relative h-screen flex items-center px-12">
            <div className="hero-content w-[65rem] m-auto">
              <h1 className="text-[8rem] mb-10 hero-content-stagger">Sharing means having more</h1>
              <div className="content text-[2.2rem] mb-[8rem] hero-content-stagger">
                <p className="font-light">Niobium is a builder of homes and communities that enriches people’s lives and creates positive impact through flexible, reliable, and vibrant offerings.</p>
              </div>
              <div className="animated-btn-wrap hero-content-stagger">
                <a className="animated-btn text-black uppercase relative inline-block" href="#">
                  <p className="relative">
                    <span className="relative bg-[#FFC304] top-[0.95rem] left-[0.95rem] flex items-center font-medium text-[3.5rem] px-[2rem] py-[1rem]">Continue</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section h-screen overflow-hidden bg-gray-500"></div>

      <div className="section third h-screen overflow-hidden bg-gray-500 flex items-center">
        <div className="line w-full max-w-7xl h-3.5 m-auto mt-5 relative inline-block bg-red-400"></div>
      </div>


    </div>
  )
}
export default Home;