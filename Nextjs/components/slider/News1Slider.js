import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function News1Slider() {
    const truncate = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };
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
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
                className="swiper-wrapper"
            >

                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/EventImg.jpg" alt="instacertify" /></Link>
                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">Thu Jan 23</Link>
                        </div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">IMTEX 2025</h5>
                        </Link>


                            <p className="font-sm color-grey-500 mt-10">
                                {truncate("IMTEX 2025, the premier machine tool and manufacturing technology trade event and brings together global innovators", 80)}
                            </p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link><span className="date-post font-sm color-grey-700"></span></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/EventImg2.jpg" alt="instacertify" /></Link>
                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">Sat Feb 01</Link>
                        </div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">PRINTPACK INDIA 2025</h5>
                        </Link>
                            <p className="font-sm color-grey-500 mt-10">{truncate("PRINTPACK INDIA 2025 shows the future of printing and packaging. This premium event for professionals and organizations will provide an opportunity to learn about cutting-edge technology, creative solutions, and industry trends.", 80)} </p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link><span className="date-post font-sm color-grey-700"> </span></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/EventImg3.jpg" alt="instacertify" /></Link>
                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">Fri Feb 01</Link>
                        </div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">Footwear India Expo</h5>
                        </Link>
                            <p className="font-sm color-grey-500 mt-10">{truncate("Footwear India Expo is a leading forum for the footwear industry, bringing together manufacturers, buyers, and suppliers. Discover the most recent trends, inventive styles, and sophisticated innovations driving the future of footwear. With networking opportunities and live product demos, this expo is the best venue for industry experts looking to expand their business and keep ahead of the competition in the footwear sector.", 80)}</p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link><span className="date-post font-sm color-grey-700"> </span></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/EventImg4.jpg" alt="instacertify" /></Link>
                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">Mon Jn 06 </Link>
                        </div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">MAHATech Pune 2025</h5>
                        </Link>
                            <p className="font-sm color-grey-500 mt-10">{truncate(" Join MAHATech Pune 2025, a major industrial event that will showcase...", 80)}</p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link>
                                    <span className="date-post font-sm color-grey-700"> </span>
                                    </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/EventImg5.jpg" alt="instacertify" /></Link>
                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">Thu Jan 09 </Link>
                        </div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">PLASTPACK 2025</h5>
                        </Link>
                            <p className="font-sm color-grey-500 mt-10">{truncate(" PLASTPACK 2025 presents the most recent innovations in plastic packaging technology and sustainable alternatives.", 80)}</p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link>
                                    <span className="date-post font-sm color-grey-700"> </span>
                                    </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/EventImg6.jpg" alt="instacertify" /></Link>
                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">Fri Jan 10 </Link>
                        </div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">Power On 2025</h5>
                        </Link>
                            <p className="font-sm color-grey-500 mt-10">{truncate("Power On 2025 brings together energy industry experts to demonstrate renewable breakthroughs and smart grid solutions. Experience ground-breaking technology.", 80)}</p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link>
                                    <span className="date-post font-sm color-grey-700"> </span>
                                    </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
        </>
    )
}
