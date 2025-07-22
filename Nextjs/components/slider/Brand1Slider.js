import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Brand1Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={6}
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                // className="swiper-wrapper wow animate__animated animate__fadeIn"
            >

                <SwiperSlide><img src="/assets/imgs/slider/logo/borosil.jpg" style={{ paddingTop: '5px', paddingBottom: '30px'}} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/electroline.png" style={{ paddingTop: '25px'}} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/elpro.png" style={{ paddingTop: '20px'}} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/Grundfos.png" alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/gursoy.png" style={{ padding: '10px'}} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/ingersoll.png" style={{ paddingTop: '20px'}} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/electroline.png" style={{ paddingTop: '20px'}} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/elpro.png" style={{ paddingTop: '20px'}} alt="brand" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
