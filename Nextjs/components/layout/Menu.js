import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>
            <ul 
            className="main-menu"
            >
                <li 
                // className="has-children"
                ><Link className="active" href="/">Home</Link>
                   
                </li>
                
                
                <li><Link href="/about">About Us</Link></li>

                
                {/* services */}
                <li className="has-children"><Link href="#">Certification</Link>
                    <div className="sub-menu four-col">
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">Asia Pacific </h6>
                            {/* <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu1.png" alt="transp" /></div> */}
                            <ul className="megamenu">
                                <li><Link href="/services">India</Link></li>
                                <li><Link href="/services">China</Link></li>
                                <li><Link href="/services">Japan</Link></li>
                                <li><Link href="/services">South Korea</Link></li>
                                <li><Link href="/services">Asean</Link></li>
                                <li><Link href="/services">Twaiwan</Link></li>
                                <li><Link href="/services">Australia/New Zealand</Link></li>
                                
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">EMEA</h6>
                            {/* <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu2.png" alt="transp" /></div> */}
                            <ul className="megamenu">
                                <li><Link href="/services">Middle Easte</Link></li>
                                <li><Link href="/services">Affrica</Link></li>
                                <li><Link href="/services">Europe</Link></li>
                                <li><Link href="/services">Eurasia</Link></li>
                                
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">America</h6>
                            {/* <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu3.png" alt="transp" /></div> */}
                            <ul className="megamenu">
                                <li><Link href="/services">United State & Canada                                </Link></li>
                                <li><Link href="/services">Mexico</Link></li>
                                <li><Link href="/services">Brazil</Link></li>
                                
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">Global</h6>
                            {/* <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu4.png" alt="transp" /></div> */}
                            {/* <ul className="megamenu">
                                <li><Link href="/services">Rail Freight Transportation</Link></li>
                                <li><Link href="/services">Rail Terminal Services</Link></li>
                                <li><Link href="/services">Rail Freight Forwarding</Link></li>
                                <li><Link href="/services">Intermodal Transportation</Link></li>
                                <li><Link href="/services">Rail Logistics Consulting</Link></li>
                            </ul> */}
                        </div>
                        {/* <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">Warehouse</h6>
                            <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu5.png" alt="transp" /></div>
                            <ul className="megamenu">
                                <li><Link href="/services">Warehousing</Link></li>
                                <li><Link href="/services">Distribution Center Operations</Link></li>
                                <li><Link href="/services">E-Commerce Fulfillment</Link></li>
                                <li><Link href="/services">Reverse Logistics</Link></li>
                                <li><Link href="/services">Inventory Management</Link></li>
                            </ul>
                        </div> */}
                    </div>
                </li>


                <li><Link href="/product-testing"> Product Testing</Link></li>

                <li className="has-children"><Link href="#">Resources</Link>
                 {/* Service detail */}
                    <ul className="sub-menu">

                    <li><Link href="/newsletter">News</Link></li>
                    <li><Link href="/events">Events</Link></li>
                    <li><Link href="/standards">Standards</Link></li>
                        {/* <li><Link href="/service-detail">Service Detail</Link></li>
                        <li><Link href="/trackyourparcel">Track Your Parcel</Link></li>
                        <li><Link href="/workprocess">Work Process</Link></li>
                        <li><Link href="/request-a-quote">Request a quote</Link></li>
                        <li><Link href="/our-team">Our team</Link></li>
                        <li><Link href="/faqs">FAQ's</Link></li>
                        <li><Link href="/register">Register</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/comingsoon">Coming soon</Link></li>
                        <li><Link href="/404">Error 404</Link></li> */}
                    </ul>
                </li>

                {/* <li ><Link href="/blog">Blog</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
