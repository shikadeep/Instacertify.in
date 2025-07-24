import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonial1Slider() {
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
                        <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/user.svg" alt="instacertify" /></Link>
                            <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">
                                Sanjay</span></Link>
                                {/* <span className="font-sm color-grey-500 department">Bank of America</span> */}
                                </div>
                        </div>
                        <p className="font-md color-grey-700">
                                Insta Certify Services has been an invaluable partner in ensuring our products meet
                                industry standards. Their expertise in testing and certification is unmatched, and their
                                team has been incredibly supportive throughout the entire process. We highly recommend
                                them for anyone seeking reliable certification solutions.
                            </p>
                        <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><br /><span className="font-sm color-white">For customer
                                support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/user.svg" alt="instacertify" /></Link>
                            <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Amit S
                                </span></Link>
                                {/* <span className="font-sm color-grey-500 department">Bank of America</span> */}
                                </div>
                        </div>
                        <p className="font-md color-grey-700">We've worked with several certification companies in the past, but none compare to Insta
                                Certify Services. Their streamlined testing and certification processes have saved us
                                time and resources. The team goes above and beyond to ensure everything is done
                                correctly, and their equipment is cutting-edge.
                            </p>
                        <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><br /><span className="font-sm color-white">For customer
                                support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/user.svg" alt="instacertify" /></Link>
                            <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Shalini P
                                </span></Link>
                                {/* <span className="font-sm color-grey-500 department">Bank of America</span> */}
                                </div>
                        </div>
                        <p className="font-md color-grey-700"> The team at Insta Certify Services provided us with not only certification but also
                                guidance on improving our processes. Their comprehensive approach and personalized
                                support have allowed us to meet regulatory requirements more efficiently. Their streamlined testing and certification processes have saved us
                                time and resources.
                            </p>
                        <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><br /><span className="font-sm color-white">For customer
                                support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/user.svg" alt="instacertify" /></Link>
                            <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Neha M</span></Link>
                            {/* <span className="font-sm color-grey-500 department">Bank of America</span> */}
                            </div>
                        </div>
                        <p className="font-md color-grey-700">We've worked with several certification companies in the past, but none compare to Insta
                                Certify Services. Their streamlined testing and certification processes have saved us
                                time and resources. The team goes above and beyond to ensure everything is done
                                correctly, and their equipment is cutting-edge.
                            </p>
                        <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><img src="/assets/imgs/template/icons/star.svg" alt="instacertify" /><br /><span className="font-sm color-white">For customer
                                support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="box-pagination-customers">
                <div className="swiper-button-prev swiper-button-prev-customers swiper-button-prev-style-1 wow animate__animated animate__fadeIn">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-customers swiper-button-next-style-1 wow animate__animated animate__fadeIn">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
        </>
    )
}
