import Testimonial1Slider from "@/components/slider/Testimonial1Slider";

export default function Testimonial1() {
    return (
        <>
            <section className="section mt-50 bg-customers-say">
                <div className="container">
                    <h2 
                    // className="title-favicon
                    className= " mb-20 title-padding-left wow animate__animated animate__fadeIn" style={{color:'#045478'}}>
                        Client Testimonials:</h2>
                    <p className="font-lg color-#045478 pl-55 wow animate__animated animate__fadeIn">Building Success Together
                        <br className="d-none d-lg-block" />
                        </p>
                </div>
                <div className="container">
                    <div className="box-slide-customers mt-50">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-3-customers pb-50">
                                <Testimonial1Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
