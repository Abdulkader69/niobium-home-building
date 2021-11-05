import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
// import styles from '../assets/css/custom.css';
const Header = () => {
    const [menuExpanded, setMenuExpanded] = useState(false);
    const animation = useRef(null);
    const menu = useRef(null);

    useEffect(() => {
        animation.current = gsap.timeline().to(menu.current, {
            x: 300
        });
        return () => {
            animation.current.kill();
        }
    }, []);

    useEffect(() => {
        if(menuExpanded) {
            animation.current.reverse();
        } else {
            animation.current.play();
        }
    }, [menuExpanded]);

    return (
        <header id="main-header" className="fixed flex justify-between z-[99] top-[-1px] left-[-1px] w-full h-[10rem]">
            <div className="logo_wrap relative w-[28.8rem] h-[16rem]">
                <Link href="/">
                    <a>
                        <div className="logo_shadow absolute bottom-0 right-0 w-[116.66%] h-[130%] origin-top-left z-[2]">
                            <img className="block w-full h-full object-contain" src="http://niobium-home-building.codegaints.com/wp-content/uploads/2021/10/logoshadow.svg" alt="logo shadow" />
                        </div>
                        <div className="logo relative z-[2] w-full h-full p-[2rem] flex items-center justify-center">
                            <div className="logo_bg absolute top-0 left-0 w-full h-full bg-white origin-top-left z-[-1]"></div>
                            <div className="logo_in">
                                <img src="http://niobium-home-building.codegaints.com/wp-content/uploads/2021/10/niobium.png" alt="" />
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="menu-wrap w-72 mt-24 mr-24">
                <button
                    type="button"
                    onClick={() => {
                        setMenuExpanded(!menuExpanded);
                    }}
                    className={`relative w-full text-right py-4 ${menuExpanded ? "is_active" : ''}`}
                >
                    <p className="menu font-bold uppercase text-[2.2rem] absolute">Menu</p>
                    <p className="close font-bold uppercase text-[2.2rem] absolute">Close</p>
                    <div className="hambarger h-9 w-20 relative text-right mr-0 ml-auto">
                        <span className="h-[0.3rem] w-20 bg-black absolute right-0 inline-block"></span>
                        <span className="h-[0.3rem] w-20 bg-black absolute right-0 inline-block top-[1rem]"></span>
                        <span className="h-[0.3rem] w-20 bg-black absolute right-0 inline-block top-[2rem]"></span>
                    </div>
                </button>
                <div className="hero-menu" ref={menu}>
                    hero menu
                </div>
            </div>
        </header>
    )
}
export default Header;