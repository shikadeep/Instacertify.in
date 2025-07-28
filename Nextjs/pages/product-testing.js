// import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function ProductTestingPage() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <Layout>
            <section className="section d-block ">
                <div className="container">
                    <div className="box-pageheader-1 text-center">
                        <div className="overlay"></div>
                        {/* <span className="btn btn-tag wow animate__animated animate__fadeIn"></span> */}
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Product Testing</h2>
                        {/* <p className="font-md color-white wow animate__animated animate__fadeIn">Certification made easy with instacertify<br className="d-none d-lg-block" /></p>
                         */}
                    </div>
                    <div className="col-lg-12 mt-50 mb-50" style={{ backgroundColor: '#034460' }}>
                        
                        <div className="product-testing" style={{ borderRadius: "4px", minWidth: 250 , paddingLeft: '10px'}}>
                            <p>Lightning</p>
                        </div>
                        <div className="product-testing" style={{ borderRadius: "4px", minWidth: 250 , paddingLeft: '10px'}}>
                            <p>Chemicals</p>
                        </div>
                        <div className="product-testing" style={{ borderRadius: "4px", minWidth: 250 , paddingLeft: '10px'}}>
                            <p>Food and Water</p>
                        </div>
                        
                        
                        <div className="product-testing" style={{ borderRadius: "4px", minWidth: 250 , paddingLeft: '10px'}}>
                            <p>ROHS</p>
                        </div>
                        <div className="product-testing" style={{ borderRadius: "4px", minWidth: 250 , paddingLeft: '10px'}}>
                            <p>REACH</p>
                        </div>
                        <div className="product-testing" style={{ borderRadius: "4px", minWidth: 250 , paddingLeft: '10px'}}>
                            <p>MSDS</p>
                        </div>
                        <div className="box-accordion">
                            <div className="accordion" id="accordionFAQ" style={{ borderRadius: "4px", overflow: "hidden" }}>
                                <div className="accordion-item wow animate__animated animate__fadeIn" style={{ borderRadius: "4px", overflow: "hidden", display: 'flex', alignItems: 'flex-start' }}>
                                    {/* Main category button on the left */}
                                    <div style={{ minWidth: 250 }}>
                                        <p className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"} style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}>
                                                Electronics & Electricals
                                            </button>
                                        </p>
                                    </div>
                                    {/* Sub-items to the right */}
                                    {isActive.key == 1 && (
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 32, flex: 1, padding: 40, backgroundColor: '#034460' }}>
                                            <div className="accordion-collapse" style={{ borderRadius: "4px", marginBottom: 8 }}>
                                                <div className="accordion-body">Radio Testing News</div>
                                            </div>
                                            <div className="accordion-collapse" style={{ borderRadius: "4px", marginBottom: 8 }}>
                                                <div className="accordion-body">EMC Testing</div>
                                            </div>
                                            <div className="accordion-collapse" style={{ borderRadius: "4px", marginBottom: 8 }}>
                                                <div className="accordion-body">Product Safety Testing</div>
                                            </div>
                                            <div className="accordion-collapse" style={{ borderRadius: "4px" }}>
                                                <div className="accordion-body">Enviornmental Testing</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}