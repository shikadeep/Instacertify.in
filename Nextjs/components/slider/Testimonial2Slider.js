import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Testimonial2Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
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
                navigation={{
                    prevEl: ".swiper-button-prev-customers",
                    nextEl: ".swiper-button-next-customers",
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
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/about/transparency.svg" alt="instacertify" /></Link>
                            <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">instacertifyarency
                                </span></Link>
                                {/* <span className="font-sm color-grey-500 department">Bank of America</span> */}
                            </div>
                        </div>
                        <p className="font-md color-grey-700" style={{}}>We maintain open and honest communication, keeping you informed 
                            throughout the process and ensuring clarity at each and every step.</p>
                        {/* <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><br /><span className="font-sm color-white">For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                        </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/about/client target.svg" alt="instacertify" /></Link>
                            <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Client-Centric Approach
                                </span></Link>
                                {/* <span className="font-sm color-grey-500 department">Bank of America</span> */}
                            </div>
                        </div>
                        <p className="font-md color-grey-700" style={{padding:'0px'}}>Understanding the distinctive requirements of each client lies
                             at the core of our efforts when providing tailored solutions and service.</p>
                        {/* <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><br /><span className="font-sm color-white">For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                        </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/about/hassle-free.svg" alt="instacertify" /></Link>
                            <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Hassle-Free Process
                                </span></Link>
                                {/* <span className="font-sm color-grey-500 department">Bank of America</span> */}
                            </div>
                        </div>
                        <p className="font-md color-grey-700" style={{}}>Experience seamless compliance with our streamlined and efficient process designed to avoid complexity and save your time and money.</p>
                        {/* <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><br /><span className="font-sm color-white">For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                        </div> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
