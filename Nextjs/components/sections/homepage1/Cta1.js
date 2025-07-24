import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Cta1() {
    return (
        <>
            <section className="section pt-70 pb-70 bg-get-quote">
                <div className="container">
                    <div className="box-get-quote">
                        <div className="get-quote-left">
                            <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">Our Equipements</p>
                            {/* <h2 className="color-brand-1 wow animate__animated animate__fadeIn">Create your next Project with Us
                            </h2> */}
                            {/* <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                slidesPerView={4}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                    el: '.swiper-pagination-banner'
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    575: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    767: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    991: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1199: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                    1350: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="swiper-wrapper"
                            >
                                <SwiperSlide className="wow animate__animated animate__fadeIn">
                                    <div className="cardGrid">
                                        <div className="cardImage"> <img src="/assets/imgs/page/homepage1/oscilloscope.jpg" alt="instacertify" /></div>
                                        <div className="cardInfo">
                                            <h5 className="color-brand-2 mb-10">Oscilloscope</h5>
                                            {/* <p className="font-xs color-grey-500">Our cosmetic Testing Services established cosmetic products safetly, quality and regulatory compliance</p> */}
                                            {/* <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></span></a></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="wow animate__animated animate__fadeIn">
                                    <div className="cardGrid">
                                        <div className="cardImage"> <img src="/assets/imgs/page/homepage1/tan delta.jpg" alt="instacertify" /></div>
                                        <div className="cardInfo">
                                            <h5 className="color-brand-2 mb-10">Tan Delta</h5>
                                            {/* <p className="font-xs color-grey-500">Our cosmetic Testing Services established cosmetic products safetly, quality and regulatory compliance</p> */}
                                            {/* <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></span></a></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="wow animate__animated animate__fadeIn">
                                    <div className="cardGrid">
                                        <div className="cardImage"> <img src="/assets/imgs/page/homepage1/tenstaile.jpg" alt="instacertify" /></div>
                                        <div className="cardInfo">
                                            <h5 className="color-brand-2 mb-10">Cosmetic</h5>
                                            <p className="font-xs color-grey-500">Our cosmetic Testing Services established cosmetic products safetly, quality and regulatory compliance</p>
                                            <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></span></a></div>
                                        </div>
                                    </div>
                                {/* </SwiperSlide> */}
                                {/* <SwiperSlide className="wow animate__animated animate__fadeIn">
                                    <div className="cardGrid">
                                        <div className="cardImage"> <img src="/assets/imgs/page/homepage1/product1.jpg" alt="instacertify" /></div>
                                        <div className="cardInfo">
                                            <h5 className="color-brand-2 mb-10">Cosmetic</h5>
                                            <p className="font-xs color-grey-500">Our cosmetic Testing Services established cosmetic products safetly, quality and regulatory compliance</p>
                                            <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></span></a></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>  */}
                        </div>
                          
                        <div className="get-quote-right"><Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="/request-a-quote">
                            <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>GET A QUOTE</Link></div>
                    </div>
                </div>
            </section>

        </>
    )
}
