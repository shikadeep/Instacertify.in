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
            <section className="section d-block">
                <div className="container">
                    <div className="box-pageheader-1 text-center">
                        <div className="overlay"></div>
                        <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">Product Testing</h2>
                    </div>
                    
                    <div className="row mt-50 mb-50">
                        <div className="col-lg-12" style={{ backgroundColor: '#034460', borderRadius: '8px', padding: '20px' }}>
                            {/* Product Testing Categories */}
                            <div className="row mb-4">
                                <div className="col-lg-4 mb-3">
                                    <div className="product-testing-item" style={{ 
                                        borderRadius: "4px", 
                                        padding: '15px', 
                                        backgroundColor: '#fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <p className="mb-0 font-weight-bold">Lightning</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <div className="product-testing-item" style={{ 
                                        borderRadius: "4px", 
                                        padding: '15px', 
                                        backgroundColor: '#fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <p className="mb-0 font-weight-bold">Chemicals</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <div className="product-testing-item" style={{ 
                                        borderRadius: "4px", 
                                        padding: '15px', 
                                        backgroundColor: '#fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <p className="mb-0 font-weight-bold">Food and Water</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <div className="product-testing-item" style={{ 
                                        borderRadius: "4px", 
                                        padding: '15px', 
                                        backgroundColor: '#fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <p className="mb-0 font-weight-bold">ROHS</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <div className="product-testing-item" style={{ 
                                        borderRadius: "4px", 
                                        padding: '15px', 
                                        backgroundColor: '#fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <p className="mb-0 font-weight-bold">REACH</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <div className="product-testing-item" style={{ 
                                        borderRadius: "4px", 
                                        padding: '15px', 
                                        backgroundColor: '#fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <p className="mb-0 font-weight-bold">MSDS</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Accordion Section */}
                            <div className="box-accordion mt-4">
                                <div className="accordion" id="accordionFAQ" style={{ borderRadius: "4px", overflow: "hidden" }}>
                                    <div className="accordion-item wow animate__animated animate__fadeIn" style={{ 
                                        borderRadius: "4px", 
                                        overflow: "hidden", 
                                        display: 'flex', 
                                        alignItems: 'flex-start',
                                        backgroundColor: '#fff'
                                    }}>
                                        {/* Main category button on the left */}
                                        <div style={{ minWidth: 250 }}>
                                            <p className="accordion-header mb-0" onClick={() => handleToggle(1)}>
                                                <button 
                                                    className={isActive.key == 1 ? "accordion-button text-heading-5" : "accordion-button text-heading-5 collapsed"} 
                                                    style={{ 
                                                        borderTopLeftRadius: "4px", 
                                                        borderTopRightRadius: "4px",
                                                        width: '100%',
                                                        textAlign: 'left',
                                                        padding: '15px',
                                                        border: 'none',
                                                        backgroundColor: '#f8f9fa',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Electronics & Electricals
                                                </button>
                                            </p>
                                        </div>
                                        
                                        {/* Sub-items to the right */}
                                        {isActive.key == 1 && (
                                            <div style={{ 
                                                display: 'flex', 
                                                flexDirection: 'column', 
                                                marginLeft: 32, 
                                                flex: 1, 
                                                padding: 20, 
                                                backgroundColor: '#f8f9fa'
                                            }}>
                                                <div className="accordion-collapse mb-2" style={{ borderRadius: "4px" }}>
                                                    <div className="accordion-body p-3" style={{ backgroundColor: '#fff' }}>
                                                        Radio Testing News
                                                    </div>
                                                </div>
                                                <div className="accordion-collapse mb-2" style={{ borderRadius: "4px" }}>
                                                    <div className="accordion-body p-3" style={{ backgroundColor: '#fff' }}>
                                                        EMC Testing
                                                    </div>
                                                </div>
                                                <div className="accordion-collapse mb-2" style={{ borderRadius: "4px" }}>
                                                    <div className="accordion-body p-3" style={{ backgroundColor: '#fff' }}>
                                                        Product Safety Testing
                                                    </div>
                                                </div>
                                                <div className="accordion-collapse" style={{ borderRadius: "4px" }}>
                                                    <div className="accordion-body p-3" style={{ backgroundColor: '#fff' }}>
                                                        Environmental Testing
                                                    </div>
                                                </div>
                                            </div>
                                        )}
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