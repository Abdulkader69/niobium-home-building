import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {

  // gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect( () => {
    // const initPreloader = () => {
      
    // } 
    const element = ref.current;
    let tlPreloader = gsap.timeline({ 
      paused: false,
      onComplete: () => {
          element.querySelector(".preloader-wrapper").classList.add('loaded_mod');
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
      duration: 1.2,
      opacity: 1,
    })

    heroAnimTL = gsap.timeline({
      paused: true,
    })

    let heroAnimTL =  gsap.timeline();
    const customDelay = .4;
    heroAnimTL
      .addLabel('logoLabel')
		  .fromTo('.logo_bg', {
			  // scaleX: 0
		  }, {
        // duration: .3,
        // scaleX: 1,
        delay: 1.2,
		  }, `logoLabel+=${customDelay}`)
      .fromTo('.logo_in', {
        opacity: 0,
        x: 50
      }, {
        opacity: 1,
        x: 0,
        duration: .3,
      }, `logoLabel+=${customDelay}`)
      .fromTo('.logo_wrap', {
        xPercent: 0,
        yPercent: 0,
      }, {
        xPercent: 16.66,
        yPercent: 30,
        duration: .3,
        ease: 'none',
      })
      .addLabel('img')
    .fromTo(['.image-wrap', '.hero-image'], {
      xPercent: gsap.utils.wrap([-100, 100]),
      yPercent: gsap.utils.wrap([-100, 100]),
      opacity: gsap.utils.wrap([0, 1]),
    }, {
      xPercent: gsap.utils.wrap([0, 0]),
      yPercent: gsap.utils.wrap([0, 0]),
      opacity: gsap.utils.wrap([1, 1]),
      ease: 'none',
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

      <div className="preloader-wrapper bg-white w-full h-screen fixed z-[998] top-0 left-0">
        <div className="preloader-bg w-full h-screen fixed z-[999] top-0 left-0 bg-red-300">
          <div className="preloader-bg-inner absolute h-full w-full z-40 top-0 left-0 bg-yellow-400"></div>
          <div className="preloader-bg-inner1 absolute h-full w-full z-40 top-0 left-0 bg-green-500"></div>
          <div className="preloader-bg-inner1 absolute h-full w-full z-40 top-0 left-0 bg-pink-600"></div>
        </div>
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
            <div className="hero-content w-full max-w-[65rem] m-auto">
              <h1 className="text-[8rem] mb-10 hero-content-stagger">Sharing means having more</h1>
              <div className="content text-[2.2rem] mb-[8rem] hero-content-stagger">
                <p className="font-light">Niobium is a builder of homes and communities that enriches people’s lives and creates positive impact through flexible, reliable, and vibrant offerings.</p>
              </div>
              <div className="animated-btn-wrap hero-content-stagger">
                <a className="animated-btn text-white uppercase relative inline-block" href="#new-way-section">
                  <p className="relative">
                    <span className="relative bg-primary top-[0.95rem] left-[0.95rem] flex items-center font-regular text-[3.5rem] px-[2rem] py-[1rem]">Continue</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section new-way-section overflow-hidden mt-60" id="new-way-section">
        <div className="flex flex-wrap items-center">
          <div className="w-1/2 relative px-12">
            <div className="new-way-content w-full max-w-[70rem] m-auto">
              <h2 className="text-[6rem] mb-10 hero-content-stagger">A new way of living together</h2>
              <div className="content text-[2.2rem] mb-[8rem] hero-content-stagger">
                <p className="font-light">Niobium builds homes and communities to enrich people’s lives and create positive impact through flexible, reliable, and vibrant offerings.</p>
              </div>
              <div className="animated-btn-wrap hero-content-stagger">
                <a className="animated-btn text-white uppercase relative inline-block" href="#">
                  <p className="relative">
                    <span className="relative bg-primary top-[0.95rem] left-[0.95rem] flex items-center font-regular text-[3.5rem] px-[2rem] py-[1rem]">Learn more</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="relative h-full top-0 left-0 w-full origin-top-left overflow-hidden">
              <div className="block w-full h-full">
                <img className="w-full h-full object-cover" src="http://niobium-home-building.codegaints.com/wp-content/uploads/2021/10/kader1.jpg" alt="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section hero-headline-section overflow-hidden bg-primary py-24 px-96 mt-60">
        <div className="flex items-center justify-center">
          <h2 className="text-9xl w-full max-w-[170rem] text-center text-gray-100 leading-[1.2]">Our tenants are one in a million, not one of a million</h2>
        </div>
      </div>

      <div className="section about-section mt-60 px-[25rem]">

        <div className="flex flex-nowrap about-item items-center mb-36">
          <div className="new-way-image w-[66rem]">
            <img className="w-full" src="http://niobium-home-building.codegaints.com/wp-content/uploads/2021/10/kader1.jpg" alt="" />
          </div>
          <div className="new-way-content w-calc-100-66 pl-[20rem]">
            <div className="paragraph text-[2.2rem] mb-[8rem] hero-content-stagger">
              <p className="font-light">Our mission goes beyond the individual homes and takes into account the impact to the environment and society at large. We strike a balance between profitability and following sustainable and socially-responsible practices.</p>
            </div>
            <div className="animated-btn-wrap hero-content-stagger">
                <a className="animated-btn text-white uppercase relative inline-block" href="#">
                  <p className="relative">
                    <span className="relative bg-primary top-[0.95rem] left-[0.95rem] flex items-center font-regular text-[3.5rem] px-[2rem] py-[1rem]">Learn more</span>
                  </p>
                </a>
              </div>
          </div>
        </div>

        <div className="flex flex-nowrap about-item items-center mb-36">
          <div className="new-way-content w-calc-100-66 pr-[20rem]">
            <div className="paragraph text-[2.2rem] mb-[8rem] hero-content-stagger">
              <p className="font-light">Our mission goes beyond the individual homes and takes into account the impact to the environment and society at large. We strike a balance between profitability and following sustainable and socially-responsible practices.</p>
            </div>
            <div className="animated-btn-wrap hero-content-stagger">
                <a className="animated-btn text-white uppercase relative inline-block" href="#">
                  <p className="relative">
                    <span className="relative bg-primary top-[0.95rem] left-[0.95rem] flex items-center font-regular text-[3.5rem] px-[2rem] py-[1rem]">Learn more</span>
                  </p>
                </a>
              </div>
          </div>
          <div className="new-way-image w-[66rem]">
            <img className="w-full" src="http://niobium-home-building.codegaints.com/wp-content/uploads/2021/10/kader2.jpg" alt="" />
          </div>
        </div>

        <div className="flex flex-nowrap about-item items-center">
          <div className="new-way-image w-[66rem]">
            <img className="w-full" src="http://niobium-home-building.codegaints.com/wp-content/uploads/2021/10/kader1.jpg" alt="" />
          </div>
          <div className="new-way-content w-calc-100-66 pl-[20rem]">
            <div className="paragraph text-[2.2rem] mb-[8rem] hero-content-stagger">
              <p className="font-light">Our mission goes beyond the individual homes and takes into account the impact to the environment and society at large. We strike a balance between profitability and following sustainable and socially-responsible practices.</p>
            </div>
            <div className="animated-btn-wrap hero-content-stagger">
                <a className="animated-btn text-white uppercase relative inline-block" href="#">
                  <p className="relative">
                    <span className="relative bg-primary top-[0.95rem] left-[0.95rem] flex items-center font-regular text-[3.5rem] px-[2rem] py-[1rem]">Learn more</span>
                  </p>
                </a>
              </div>
          </div>
        </div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLgcPxVODYXGJS6iqdZe1LUUW9iXS7ZGrf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      </div>


    </div>
  )
}
export default Home;