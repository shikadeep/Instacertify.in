
export default function Newsletter1() {
    return (
        <>
             <div className="section bg-map d-block">
                    <div className="container">
                        
                        <div className="box-newsletter">
                            <h3 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">Get in Touch</h3>
                            <div className="row">
                                <div className="col-lg-5 mb-30">
                                    <div className="form-newsletter wow animate__animated animate__fadeIn">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="FirstName *" />
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="LastName *" />
                                                    </div>
                                                </div> */}
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={5} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-7 mb-30">
                                    <div className="d-flex box-newsletter-right">
                                        <div className="box-map-2 wow animate__animated animate__fadeIn">
                                            <iframe className="wow animate__animated animate__fadeIn" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.2476162754697!2d77.39314977429281!3d28.61493758488163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef026d8d22d3%3A0x4921bde7d687fe82!2sInstacertify%20-%20BIS%2C%20ISI%20%2C%20EPR%2C%20LMPC%20Consultant!5e1!3m2!1sen!2sin!4v1753287468819!5m2!1sen!2sin"
                                                height={420} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                            />
                                        </div>
                                        <ul className="list-info-footer">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/address.svg" alt="instacertify" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Address</h6>
                                                    <p className="font-sm color-grey-900">A-34, Sector 63 A, Noida,
                                                        Uttar Pradesh 201301</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="instacertify" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Email</h6>
                                                    <p className="font-sm color-grey-900">contact@instacertify.com</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="instacertify" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Telephone</h6>
                                                    <p className="font-sm color-grey-900">+91 9999118039</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
