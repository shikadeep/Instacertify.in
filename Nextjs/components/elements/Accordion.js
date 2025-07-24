import { useState } from "react";

export default function Accordion() {
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
        <>
            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            What services does Instacertify offer?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Instacertify provides comprehensive product testing and certification compliance services,
                             including BIS, CRS, ISI, CDSCO, WPC, IMEI-DOT, GMARK, LMPC, SFDA, CIB, EPR, and E-waste Management.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            How can I request a certification or testing service?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">You can easily request our services by filling out the inquiry form on our website or by contacting us directly through
                             our provided phone number or email. Our team will guide you through the process and provide the necessary assistance.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            What industries do you serve?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">We serve a wide range of industries, including manufacturing, electronics, pharmaceuticals,
                             and consumer goods. Our expertise covers various sectors, ensuring tailored solutions for diverse regulatory needs.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                            How long does the certification process take?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">The duration of the certification process depends on the specific requirements and complexity of the certification.
                             Our team will provide you with an estimated timeline based on your needs and keep you updated throughout the process.
                        </div>
                    </div>
                </div>
                {/* <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How can I pay for my
                            purchases?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Qui quas itaque ut molestias culpa vel culpa
                            voluptas eos fugit sint ex veritatis totam cum unde maxime! Qui eius fugiat
                            qui veritatis cumque a nesciunt nemo. Id numquam rerum est molestiae quia ut
                            nisi architecto a officiis itaque eum quod repellat ut dolorem dolorem aut
                            ipsam ipsa.</div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
