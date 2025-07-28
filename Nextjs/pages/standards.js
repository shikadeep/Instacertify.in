import Link from "next/link"

const { default: Layout } = require("@/components/layout/Layout")

export default function standards(){
    return(
        <Layout>
             <section className="section pt-110 pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <h2 className=" mb-20 wow animate__animated animate__fadeIn">Standards</h2>
                                {/* <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Welcome to our tranporation services agency.
                                     We are<br className="d-none d-lg-block" />the best at our trans-portation service ever.</p> */}
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team1.png" alt="instacertify" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Mandatory Bis Standards</h6>
                                        <div className="info-bottom">
                                            <Link href="/"><p>Read More</p></Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team1.png" alt="instacertify" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Upcoming Bis Standards
                                        </h6>
                                        <div className="info-bottom">
                                            <Link href="/"><p>Read More</p></Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team1.png" alt="instacertify" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Mandatory CRS Standards
                                        </h6>
                                        <div className="info-bottom">
                                            <Link href="/"><p>Read More</p></Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team1.png" alt="instacertify" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Scheme X
                                        </h6>
                                        <div className="info-bottom">
                                            <Link href="/"><p>Read More</p></Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
        </Layout>
    )
}