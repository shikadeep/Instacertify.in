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

                
                <li 
                
                ><Link href="/services">Certification</Link>
                    
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
