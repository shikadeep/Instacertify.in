import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero1Slider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide>
                    <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/hero-image.jpg)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    {/* <p className="font-md color-white mb-15 wow animate__animated animate__fadeIn" data-wow-delay=".0s">Logistics &amp; Transportation</p> */}
                                    <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">BE TESTED. BE CERTIFIED.
                                        <br className="d-none d-lg-block" />BE UNSTOPPABLE </h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">No Matter What You Make, Where You Make, Our Quality Solutions Are Always For You.</p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-30">
                                        <Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp" href="#">About us</Link>
                                        {/* <a className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeInUp" onClick={() => setOpen(true)}>
                                            <img className="wow animate__animated animate__fadeInUp"
                                                src="/assets/imgs/template/icons/play.svg"
                                                alt="" />How it work
                                            ?</a> */}
                                    </div>

                                </div>
                                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} /> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/hero-image3.jpg)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    {/* <p className="font-md color-white mb-15 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Logistics &amp; Transportation</p> */}
                                    <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">BE TESTED. BE CERTIFIED.<br className="d-none d-lg-block" />BE UNSTOPPABLE </h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">No Matter What You Make, Where You Make, Our Quality Solutions Are Always For You.</p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-30"><Link
                                        className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp"
                                        href="#">About us</Link>
                                        {/* <a
                                            className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeInUp"
                                            onClick={() => setOpen(true)}

                                        ><img className="wow animate__animated animate__fadeInUp" src="/assets/imgs/template/icons/play.svg" alt="" />How it work
                                            ?</a> */}
                                    </div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
        </>
    )
}
