import Link from "next/link";

export default function Info1() {
    return (
        <>
            <section className="section mt-85">
                <div className="container">
                    <div className="text-center">
                        {/* <img className="mb-15" src="/assets/imgs/template/icons/favicon.svg" alt="instacertify" /> */}
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"></p>

                    <h3 className="color-brand-2 mb-65 mt-15 wow animate__animated animate__fadeIn"> Why We Are The Best
                             </h3>
                        
                    </div>
                    <div className="row mt-50 align-items-center">
                        <div className="col-xl-7 col-lg-6 mb-30">
                            <div className="box-images-pround">
                                <div className="box-images wow animate__animated animate__fadeIn"><img className="img-main" src="/assets/imgs/page/homepage1/lab-testing.jpg" alt="instacertify" />
                                    {/* <div className="image-2 shape-3"><img src="/assets/imgs/page/homepage1/icon1.png" alt="instacertify" /></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 mb-30">
                            <div className="box-info-pround">
                                <h3 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">We help you be market ready with all our Dynamic Solution</h3>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">Our expert not only work toward in getting job done, but also
                                     work towards elevatating your product's credibility with our solutions, ensuring
                                     compliance and quality assurance. Our streamline the process, offering expertise that empowers your business to excel in the market.</p>
                                {/* <div className="mt-30">
                                    <ul className="list-ticks">
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Comprehensive Compliance Solutions
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Expertise in Certification Services
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Reliable Compliance Consulting
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Efficient Certification Advisory
                                        </li>
                                        {/* <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Meet deadlines faster
                                        </li> */}
                                        {/* <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Track time spent on each project
                                        </li> */}
                                    {/* </ul>
                                </div> */} 
                                <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up" href="/request-a-quote">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>Get a quote</Link></div>
                                {/* <div className="mt-30 text-start d-flex wow animate__animated animate__fadeIn"><Link className="hover-up mr-10" href="#"><img src="/assets/imgs/template/appstore-btn.png" alt="instacertify" /></Link><Link className="hover-up" href="#"><img src="/assets/imgs/template/google-play-btn.png" alt="instacertify" /></Link></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
