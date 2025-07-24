import Link from "next/link";

export default function Info7() {
    return (
        <>
            <section className="section pt-60 pb-65">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="box-image-info-7"><img src="/assets/imgs/page/homepage1/HowItWork-image.jpg" alt="instacertify" />
                                {/* <div className="quote shape-2" /> */}
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="box-info-7"><span className="btn btn-tag wow animate__animated animate__fadeIn">What We Offer</span>
                                <h3 className="color-grey-900 mb-30 mt-20 wow animate__animated animate__fadeIn">We Offer an Effective Wide Area Business Solutions</h3>
                                {/* <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">We strive to
                                    become pioneers in the field, providing first quality and cost-effective service, and
                                    smart solutions to the market. Our 30 years’ experience in the shipping, instacertifyort and
                                    logistics industry is our strength, which support us to deliver our promises to our
                                    customers.</p> */}
                                <div className="row">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="support-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                            Compliances</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Making you product compliance ready</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="support-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                            Registration</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Covers all the registration that you need</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="support-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                            International</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Take your product around the globe</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="support-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                            Lab Testing</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Simply all the test your products needs</p>
                                    </div>
                                </div>
                                <div className="d-flex mt-20"><Link className="mr-10 wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/template/appstore-btn.png" alt="instacertify" /></Link><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/template/google-play-btn.png" alt="instacertify" /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
