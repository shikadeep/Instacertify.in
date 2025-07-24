import Hero4Slider from "@/components/slider/Hero4Slider";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function Hero4() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section d-block">
                <div className="banner-1 banner-4 wow animate__animated animate__fadeIn" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/hero-image3.jpg)' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">BE TESTED. BE CERTIFIED.
                                    <br className="d-none d-lg-block" />BE UNSTOPPABLE </h1>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <p className="font-md color-white mb-20 wow animate__animated animate__fadeIn">No Matter What You Make, Where You Make, Our Quality Solutions Are Always For You<br className="d-none d-lg-block wow animate__animated animate__fadeIn" />
                                        </p>
                                    </div>
                                </div>
                                <div className="box-button mt-30">
                                    <a className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeIn" href="#">About us</a>
                                
                                <a className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeIn" onClick={() => setOpen(true)}>
                                    <img src="/assets/imgs/page/about/play-button.svg" style={{width:'50px'}} alt="instacertify" /></a>
                                </div>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} /> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="box-slider-homepage2 box-slider-homepage-4">
                    <div className="container">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-4 swiper-group-3-style-2">
                                <Hero4Slider />
                            </div>
                            <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-style-2 swiper-button-prev-group-4">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </div>
                            <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-style-2 swiper-button-next-group-4">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}
