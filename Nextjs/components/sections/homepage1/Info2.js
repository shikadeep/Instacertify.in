import Link from "next/link";

export default function Info2() {
    return (
        <>
            <section className="section mt-55 bg-1 position-relative pt-90 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"><span className="btn btn-tag wow animate__animated animate__fadeIn">Get in
                            touch</span>
                            <h3 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">What We Offer
                                {/* <br className="d-none d-lg-block" /> */}
                            </h3>
                            <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">We Offer an Effective Wide Area Business Solutions.</p>
                            <div className="row">
                                <div className="col-lg-6 mb-30">
                                    <h6 
                                    // className="chart-title
                                     className=" feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                        Compliance</h6>
                                    <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Making you product compliance ready </p>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                        Registration</h6>
                                    <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Covers all the registration that you need.</p>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                        International</h6>
                                    <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Take your product around the globe.</p>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                        Lab Testing</h6>
                                    <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Simply all the test your products needs</p>
                                </div>
                            </div>
                            <div className="mt-20"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="/contact">Contact Us</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link></div>
                        </div>
                    </div>
                </div>
                <div className="box-image-touch" />
            </section>
        </>
    )
}
