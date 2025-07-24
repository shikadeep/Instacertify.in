
export default function Bgmap() {
    return (
        <>
            <div className="section bg-map d-block">
                <div className="container">
                    <div className="box-map">
                        <iframe className="wow animate__animated animate__fadeIn" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.2476162754697!2d77.39314977429281!3d28.61493758488163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef026d8d22d3%3A0x4921bde7d687fe82!2sInstacertify%20-%20BIS%2C%20ISI%20%2C%20EPR%2C%20LMPC%20Consultant!5e1!3m2!1sen!2sin!4v1753287468819!5m2!1sen!2sin"
                            // width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            // width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"                        
                            height={420} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="map-info"><img className="mb-25 wow animate__animated animate__fadeIn" src="/assets/imgs/template/ic-logo.svg" alt="instacertify" />
                            <p className="color-grey-700 mb-25 wow animate__animated animate__fadeIn">A-34, Sector 63 A, Noida,
                                Uttar Pradesh 201307</p>
                            <p className="color-grey-700 mb-10 wow animate__animated animate__fadeIn">
                                <svg className="icon-16 mr-10 color-brand-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
                                    </path>
                                </svg>Phone: +91 9999118039
                            </p>
                            <p className="color-grey-700 mb-30 wow animate__animated animate__fadeIn">
                                <svg className="icon-16 mr-10 color-brand-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                                    </path>
                                </svg>Email: contact@instacertify.com
                            </p>
                            <div className="line-border mb-25 wow animate__animated animate__fadeIn" />
                            <p className="color-grey-700 font-md-bold wow animate__animated animate__fadeIn"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
