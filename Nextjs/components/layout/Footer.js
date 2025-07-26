import Link from "next/link";

export default function Footer1({ }) {
    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 width-23 mb-30">
                                <div className="mb-20">
                                    <img src="/assets/imgs/template/ic-logo.svg" alt="instacertify" />
                                    </div>
                                <p className="font-xs mb-20 color-white"></p>
                                <h6 className="color-brand-1">Follow Us</h6>
                                <div className="mt-15"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /><Link className="icon-socials icon-youtube" href="#" /><Link className="icon-socials icon-skype" href="#" /></div>
                            </div>
                            {/* <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Company</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/about">Mission &amp; Vision</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/career">Careers</Link></li>
                                    <li><Link href="#">Press &amp; Media</Link></li>
                                    <li><Link href="#">Advertising</Link></li>
                                    <li><Link href="#">Testimonials</Link></li>
                                </ul>
                            </div> */}
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Industries</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">Electronic and Electricity</Link></li>
                                    <li><Link href="#">Chemicals</Link></li>
                                    <li><Link href="#">Food</Link></li>
                                    <li><Link href="#">Toys</Link></li>
                                    <li><Link href="#">Metal and Alloys</Link></li>
                                    <li><Link href="#">Polymers and Plastics</Link></li>
                                    <li><Link href="#">Construction and Engineering</Link></li>
                                    <li><Link href="#">Wireless</Link></li>
                                    <li><Link href="#">Cosmetics</Link></li>
                                    <li><Link href="#">Software</Link></li>
                                    <li><Link href="#">Environment</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Company</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/about">Mission &amp; Vision</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/career">Careers</Link></li>
                                    <li><Link href="#">Press &amp; Media</Link></li>
                                    <li><Link href="#">Advertising</Link></li>
                                    <li><Link href="#">Testimonials</Link></li>
                                </ul>
                            </div> 
                            <div className="col-lg-3 width-16 mb-30">
                                <h5 className="mb-10 color-brand-1">Services</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">BIS (ISI MARK) for Foreign Manufacturers</Link></li>
                                    <li><Link href="#">BIS (ISI Mark) for Domestic Product Certification</Link></li>
                                    <li><Link href="#">BIS (CRS Mark) for Compulsory Registration Scheme</Link></li>
                                    <li><Link href="#">EPR Plastic Waste</Link></li>
                                    <li><Link href="#">EPR E-Waste</Link></li>
                                    <li><Link href="#"> EPR Battery Waste</Link></li>
                                    <li><Link href="#"> EPR for Used Oil</Link></li>
                                    <li><Link href="#"> EPR for Tyre</Link></li>
                                    <li><Link href="#"> Peso Certification</Link></li>
                                    <li><Link href="#"> NSIC of MSME</Link></li>
                                    <li><Link href="#"> STQC Certification</Link></li>
                                    <li><Link href="#"> FSSAI Registration</Link></li>
                                    <li><Link href="#"> CDSCO Registration</Link></li>
                                    <li><Link href="#"> NOC for Steel</Link></li>
                                    


                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30">
                                {/* <h5 className="mb-10 color-brand-1">Company</h5> */}
                                <ul className="menu-footer">
                                    <li><Link href="#"> BEE Certification</Link></li>
                                    <li><Link href="#"> WPC-ETA Approval</Link></li>
                                    <li><Link href="#"> FCC Certification</Link></li>
                                    <li><Link href="#"> IMEI Registration</Link></li>
                                    <li><Link href="#"> IMEI ICDR Registration</Link></li>
                                    <li><Link href="#"> TEC Approval</Link></li>
                                    <li><Link href="#"> ISO Certification</Link></li>
                                    <li><Link href="#"> HACCP</Link></li>
                                    <li><Link href="#"> HALAL</Link></li>
                                    <li><Link href="#"> SABER</Link></li>
                                    <li><Link href="#"> G MARK for Toys</Link></li>
                                    <li><Link href="#"> G MARK for Low Voltage Electrical Devices (LVED)</Link></li>
                                    <li><Link href="#"> SFDA for Rice</Link></li>
                                    <li><Link href="#"> SFDA for Food</Link></li>
                                    <li><Link href="#"> SFDA for Cosmetics</Link></li>
                                    <li><Link href="#"> CE Certification</Link></li>
                                </ul>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row align-items-center" style={{color:'#FFFFFF'}} >
                                <div className="col-lg-6 col-md-12 text-center text-lg-start"><span className=" font-md">Copyright © Instacertify Labs Private Limited {new Date().getFullYear()}. All right reversed.</span></div>
                                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                                    <ul className="menu-bottom">
                                        <li><Link className="font-sm " style={{color:'#FFFFFF'}} href="/term-conditions">Privacy policy</Link>
                                        </li>
                                        <li><Link className="font-sm  " style={{color:'#FFFFFF'}} href="/term-conditions">Cookies</Link></li>
                                        <li><Link className="font-sm "  style={{color:'#FFFFFF'}} href="/term-conditions">Terms of service</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
