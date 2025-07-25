import Layout from "@/components/layout/Layout"
// import Bgmap from "@/components/sections/homepage1/Bgmap"
import Brands1 from "@/components/sections/homepage1/Brands1"
import Howitwork1 from "@/components/sections/homepage1/Howitwork1"
import Info1 from "@/components/sections/homepage1/Info1"
import News1 from "@/components/sections/homepage1/News1"
import Projects1 from "@/components/sections/homepage1/Projects1"
// import Cta1 from "@/components/sections/homepage1/Cta1"
import Faqs1 from "@/components/sections/homepage1/Faqs1"
// import Hero1 from "@/components/sections/homepage1/Hero1"
// import Howitwork1 from "@/components/sections/homepage1/Howitwork1"
// import Info1 from "@/components/sections/homepage1/Info1"
// import Info2 from "@/components/sections/homepage1/Info2"
// import News1 from "@/components/sections/homepage1/News1"
// import Pricing1 from "@/components/sections/homepage1/Pricing1"
// import Projects1 from "@/components/sections/homepage1/Projects1"
// import Requestquote1 from "@/components/sections/homepage1/Requestquote1"
// import Testimonial1 from "@/components/sections/homepage1/Testimonial1"
import Services1 from "@/components/sections/homepage1/Services1"
import News2 from "@/components/sections/homepage2/News2"
import Newsletter1 from "@/components/sections/homepage2/Newsletter1"
import Pricing2 from "@/components/sections/homepage2/Pricing2"
import Requestquote2 from "@/components/sections/homepage2/Requestquote2"
import Info6 from "@/components/sections/homepage3/Info6"
import Hero4 from "@/components/sections/homepage4/Hero4"
import Howitwork2 from "@/components/sections/homepage4/Howitwork2"
import Info7 from "@/components/sections/homepage4/Info7"
import Projects3 from "@/components/sections/homepage4/Projects3"
import Testimonial4 from "@/components/sections/homepage4/Testimonial4"
import Whychooseus3 from "@/components/sections/homepage4/Whychooseus3"
export default function Home() {

    return (
        <>
            <Layout>

                <Hero4 />
                <Brands1 />
                <Services1 />
                <Info7 />
                <Testimonial4 />
                <Howitwork1 />
                {/* <Howitwork2 /> */}
                <div className="line-border mb-1 mt-1"></div>
                <Projects1 />
                {/* <Projects3 /> */}
                {/* <Info6 /> */}
                <div className="line-border mb-3 mt-7"></div>
                {/* <Requestquote2 /> */}
                {/* <Whychooseus3 /> */}
                <Info1 />
                <Faqs1 />
                <News1 />
                {/* <News2 /> */}
                <Newsletter1 />

                {/* <Hero1 />
                <Brands1 />
                <Services1 />
                <Info1 />
                <Info2 />     
                <Howitwork1 />
                <Testimonial1 />
                <Projects1 /> */}
                {/* <Requestquote1 /> */}
                {/* <Pricing1 /> */}
                {/* <Faqs1 />
                <Cta1 />
                <News1 />
                <Bgmap /> */}
            </Layout>
        </>
    )
}