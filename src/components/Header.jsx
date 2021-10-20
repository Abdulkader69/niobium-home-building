function Header() {
    return (
        <header id="main-header" className="fixed z-[99] top-0 left-0">
            <div className="logo_wrap relative w-[28.8rem] h-[16rem]">
                <div className="logo_shadow absolute bottom-0 right-0 w-[116.66%] h-[130%] origin-top-left z-[2]">
                    <img className="block w-full h-full object-contain" src="http://niobium-home-building.codegaints.com/wp-content/uploads/2021/10/logoshadow.svg" alt="logo shadow" />
                </div>
                <div className="logo relative z-[2] w-full h-full p-[1.6rem] flex items-center justify-center">
                    <div className="logo_bg absolute top-0 left-0 w-full h-full bg-white origin-top-left z-[-1]"></div>
                    <div className="logo_in">
                        <h1>NIOBIUM</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;