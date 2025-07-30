import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Services() {
    const [selectedRegion, setSelectedRegion] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)

    const certificationData = [
        {
            name: "Asia Pacific",
            countries: [
                {
                    name: "India",
                    categories: [
                        {
                            name: "Bureau of Indian Standards (BIS)",
                            subCategories: [
                                { name: "ISI Mark" },
                                { name: "BIS CRS" },
                                { name: "Scheme X", minorCategories: [ { name: "OTR" }, { name: "EEEC" } ] }
                            ]
                        },
                        {
                            name: "EPR (Extended Producer Responsibility)",
                            subCategories: [
                                { name: "E-waste Management" },
                                { name: "Plastic Waste Management" },
                                { name: "Battery Waste Management" },
                                { name: "Used Oil Waste Management" },
                                { name: "EPR Tyre" }
                            ]
                        },
                        {
                            name: "Legal Metrology",
                            subCategories: [
                                { name: "LMPC" },
                                { name: "Type Approve" }
                            ]
                        },
                        {
                            name: "Telecom",
                            subCategories: [
                                { name: "WPC - ETA Approve" },
                                { name: "IMEI/ICDR Registration" },
                                { name: "TEC Approval" }
                            ]
                        },
                        {
                            name: "Food & Drugs",
                            subCategories: [
                                { name: "FSSAI" },
                                { name: "CDSCO Cosmetics" },
                                { name: "CDSCO Medical Care" },
                                { name: "ISO 2200" },
                                { name: "FSSC 22200" }
                            ]
                        }
                    ]
                },
                { name: "China", categories: [] },
                { name: "Japan", categories: [] },
                { name: "South Korea", categories: [] },
                { name: "ASEAN", categories: [] },
                { name: "Taiwan", categories: [] },
                { name: "Australia/New Zealand", categories: [] }
            ]
        },
        {
            name: "EMEA",
            countries: [
                {
                    name: "Middle East",
                    categories: [
                        {
                            name: "SASO SABER",
                            subCategories: []
                        },
                        {
                            name: "GMARK",
                            subCategories: [
                                { name: "GMAR Toy" },
                                { name: "GMAR LVD" }
                            ]
                        },
                        {
                            name: "SFDA",
                            subCategories: [
                                { name: "Cosmetic" },
                                { name: "Food" }
                            ]
                        }
                    ]
                },
                {
                    name: "Africa",
                    categories: [
                        { name: "SASO/IECEE Registration", subCategories: [] },
                        { name: "South Africa/CASSA", subCategories: [] },
                        { name: "South Africa/SABS", subCategories: [] },
                        { name: "South Africa/NRCS", subCategories: [] },
                        { name: "Kenya/KEBS", subCategories: [] },
                        { name: "Egypt", subCategories: [] }
                    ]
                },
                { name: "Europe", categories: [] },
                { name: "Eurasia", categories: [] }
            ]
        },
        {
            name: "America",
            countries: [
                { name: "United States & Canada", categories: [] },
                { name: "Mexico", categories: [] },
                { name: "Brazil", categories: [] }
            ]
        },
        {
            name: "Global",
            countries: [
                {
                    name: "Global Standards",
                    categories: [
                        { name: "IMEI Registration", subCategories: [] }
                    ]
                }
            ]
        }
    ];

    // Finders
    const region = selectedRegion ? certificationData.find(r => r.name === selectedRegion) : null;
    const country = region && selectedCountry ? region.countries.find(c => c.name === selectedCountry) : null;
    const category = country && selectedCategory ? country.categories.find(cat => cat.name === selectedCategory) : null;

    return (
        <Layout>
           <div className='section d-block'>
            <section className='container'>
            <div className="simple-mega-menu">
                <h1>Certifications</h1>
                {/* Step 1: Region */}
                {!selectedRegion && (
                    <div>
                        <h2>Select a Region</h2>
                        <ul>
                            {certificationData.map(r => (
                                <li key={r.name}>
                                    <button onClick={() => setSelectedRegion(r.name)}>{r.name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Step 2: Country */}
                {selectedRegion && !selectedCountry && (
                    <div>
                        <button className="back-btn" onClick={() => setSelectedRegion(null)}>&larr; Back to Regions</button>
                        <h2>{selectedRegion}</h2>
                        <ul>
                            {region.countries.map(c => (
                                <li key={c.name}>
                                    <button onClick={() => setSelectedCountry(c.name)}>{c.name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Step 3: Category */}
                {selectedRegion && selectedCountry && !selectedCategory && (
                    <div>
                        <button className="back-btn" onClick={() => setSelectedCountry(null)}>&larr; Back to Countries</button>
                        <h2>{selectedCountry}</h2>
                        {country.categories.length === 0 ? (
                            <p>No categories available for this country.</p>
                        ) : (
                            <ul>
                                {country.categories.map(cat => (
                                    <li key={cat.name}>
                                        <button onClick={() => setSelectedCategory(cat.name)}>{cat.name}</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
                {/* Step 4: Subcategory/Minor Category */}
                {selectedRegion && selectedCountry && selectedCategory && (
                    <div className="subcategory-section">
                        <button className="back-btn" onClick={() => setSelectedCategory(null)}>&larr; Back to Categories</button>
                        <h2>{selectedCategory}</h2>
                        {category && category.subCategories && category.subCategories.length > 0 ? (
                            <ul>
                                {category.subCategories.map(sub => (
                                    <li key={sub.name} className="subcategory-item">
                                        <span>{sub.name}</span>
                                        {sub.minorCategories && sub.minorCategories.length > 0 && (
                                            <ul className="minor-list">
                                                {sub.minorCategories.map(minor => (
                                                    <li key={minor.name}>{minor.name}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No further details for this category.</p>
                        )}
                        <div style={{marginTop: 24}}>
                            <Link href="#" className="primary-btn">Request Info / Certification</Link>
                        </div>
                    </div>
                )}
                
            </div>
            <style jsx>{`
                .simple-mega-menu {
                    
                    margin: 40px auto;
                    padding: 32px 16px;
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 2px 12px rgba(4,84,120,0.04);
                    border: 1px solid #E8E9ED;
                }
                h1 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    text-align: Left;
                    color: #ec691f;
                }
                h2 {
                    font-size: 1.2rem;
                    margin: 1.5rem 0 1rem 0;
                    color: #045478;
                }
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.5rem 0;
                }
                li {
                    margin-bottom: 0.75rem;
                }
                button {
                    background: #E8E9ED;
                    border: 1px solid #E8E9ED;
                    border-radius: 6px;
                    padding: 10px 18px;
                    font-size: 1rem;
                    cursor: pointer;
                    width: 100%;
                    text-align: left;
                    transition: background 0.2s, border 0.2s, color 0.2s;
                    color: #045478;
                }
                button:hover, .primary-btn:hover {
                    background: #ec691f;
                    color: #fff;
                    border-color: #ec691f;
                }
                .back-btn {
                    background: none;
                    border: none;
                    color: #045478;
                    font-size: 1rem;
                    margin-bottom: 1rem;
                    cursor: pointer;
                    text-align: left;
                    padding: 0;
                }
                .primary-btn {
                    display: inline-block;
                    background: #ec691f;
                    color: #fff;
                    border: none;
                    border-radius: 6px;
                    padding: 10px 20px;
                    font-size: 1rem;
                    text-decoration: none;
                    margin-top: 1rem;
                    transition: background 0.2s;
                }
                .primary-btn:hover {
                    background: #045478;
                    color: #fff;
                }
                .minor-list {
                    margin-top: 0.5rem;
                    margin-left: 5.5rem;
                    font-size: 0.95em;
                    color: #045478;
                }
                body, .simple-mega-menu {
                    background: #E8E9ED;
                }
                .subcategory-section {
                    margin-top: 2rem;
                }
                .subcategory-item {
                    margin-bottom: 1rem;
                    font-weight: 500;
                    color: #045478;
                }
                @media (max-width: 600px) {
                    .simple-mega-menu {
                        max-width: 100%;
                        padding: 16px 4px;
                    }
                }
            `}</style>
            </section>
           </div>
        </Layout>
    )
}