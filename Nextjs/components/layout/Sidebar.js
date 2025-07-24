import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ openClass, handleMobileMenuClose }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo"><Link className="btn btn-brand-1 hover-up" href="/request-a-quote">
                            
                            <img src="/assets/imgs/template/icons/add-to-cart.svg" style={{width:'20px'}}></img>
                            </Link>
                        </div>
                        <div className="burger-icon burger-close" onClick={handleMobileMenuClose}><span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        <li><Link href="/">Home</Link></li>
                                        {/* <li className={isActive.key == 1 ? "has-children active" : "has-children"} onClick={() => handleToggle(1)}>
                                            <span className="menu-expand"><svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></span>
                                            <Link className="active" href="/">Home</Link>
                                            <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/">Homepage - 1</Link></li>
                                                <li><Link href="/index-2">Homepage - 2</Link></li>
                                                <li><Link href="/index-3">Homepage - 3</Link></li>
                                                <li><Link href="/index-4">Homepage - 4</Link></li>
                                            </ul>
                                        </li> */}
                                        <li><Link href="/about">About</Link></li>
                                        {/* <li className={isActive.key == 2 ? "has-children active" : "has-children"} onClick={() => handleToggle(2)}>
                                            <span className="menu-expand"><svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></span>
                                            <Link href="/services">Services</Link>
                                            {/* <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/service-detail">Service Details</Link></li>
                                            </ul> */}
                                        {/* </li> */}
                                        <li><Link href="/services">Services</Link></li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"} onClick={() => handleToggle(3)}>
                                            <span className="menu-expand"><svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></span>
                                            <Link href="#">Pages</Link>
                                            <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                {/* <li><Link href="/trackyourparcel">Track Your Parcel</Link></li>
                                                <li><Link href="/workprocess">Work Process</Link></li>
                                                <li><Link href="/request-a-quote">Request a quote</Link></li>
                                                <li><Link href="/our-team">Our team</Link></li> */}
                                                <li><Link href="/faqs">FAQ's</Link></li>
                                                <li><Link href="/service-detail">Service detail</Link></li>
                                                <li><Link href="/newsletter">Newsletter</Link></li>
                                                {/* <li><Link href="/register">Register</Link></li>
                                                <li><Link href="/login">Login</Link></li>
                                                <li><Link href="/comingsoon">Coming soon</Link></li>
                                                <li><Link href="/404">Error 404</Link></li> */}
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"} onClick={() => handleToggle(4)}>
                                            <span className="menu-expand"><svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></span>
                                            <Link href="/blog">Blog Pages</Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/blog-single">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="site-copyright color-grey-400 mt-0">
                                <div className="box-download-app">
                                    <p className="font-xs color-grey-900 mb-25">Download our Apps and get extra 15% Discount on your
                                        first Order…!</p>
                                    <div className="mb-25">
                                        <div className="d-flex"><Link className="mr-10" href="#"><img src="/assets/imgs/template/appstore-btn.png" alt="instacertify" /></Link><Link href="#"><img src="/assets/imgs/template/google-play-btn.png" alt="instacertify" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-0"><span className="font-xs color-grey-500">©instacertify Official {new Date().getFullYear()}. All right
                                    reversed.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
