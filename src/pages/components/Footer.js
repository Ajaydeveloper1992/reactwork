import {Link } from "react-router-dom";
const Footer = () => {
    return(
        <>
        <section class="foote_relative">
        <div className="main_footer">
            <footer className="bd-footer">
                <div className="mx-auto max-w-7xl align-center justify-between px-6 py-12 lg:px-8 text-body-secondary">
                  <div className="grid grid-cols-5 max-lg:grid-cols-2 gap-4 pt-12">
                    <div className="">
                      {/* <!-- <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                        <img src="assets/Logo CE 2.png" alt="Cyberelite" className="CyberElite_logo_footer">
                      </a> --> */}
                      <h1 className="fs-4 fw-bold color_white font-bold">Cyber Elite Pvt. Ltd.</h1>
                      <ul className="list-unstyled small">
                        <li className="mb-2 pt-2 font-normal">We thrive on challenges with
                            our urge to discover new ways
                            to uplift your business. So,
                            if you like our approach, let’s
                            meet over a coffee.</li>
                            <li className="text-xs font-normal mt-8">© 2023 Cyber Elite, All Rights Reserved</li>
                      </ul>
                    </div>
                    <div className="">
                      <h5 className="font-bold">Get in Touch</h5>
                      <ul className="list-unstyled">
                        <li className="mb-5">
                            <div className="flex">
                                <div className="footer_icon">
                                    <i className="fa-sharp fa-regular fa-location-dot fa-lg"></i>
                                </div>
                                <div className="font-normal">
                                    226 LIG, Jawahar Nagar, Near AB Road Dewas, 455001, India
                                </div>
                            </div>
                        </li>
                        <li className="mb-5">
                            <div className="flex">
                                <div className="footer_icon">
                                    <i className="fa-regular fa-envelope fa-lg"></i>
                                </div>
                                <div>
                                    <Link to="mailto:info@cyberelite.in" target="blank" className="font-normal">
                                        info@cyberelite.in
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="mb-5">
                            <div className="flex"> 
                                <div className="footer_icon">
                                    <i className="fa-solid fa-phone fa-lg"></i>
                                </div>
                                <div className="font-normal">
                                    
                                Mobile : <Link to="mailto:info@cyberelite.in" target="blank">+91-708-989-9090</Link><br />Landline : <Link to="mailto:info@cyberelite.in" target="blank">0731-3142 545</Link>
                                    
                                </div>
                            </div>
                        </li>
                      </ul>
                    </div>
                    <div className="">
                        <h5 className="fs-6 font-bold">Services</h5>
                      <ul className="list-unstyled">
                        <li className="mb-5 font-normal"><Link to="#">Customer Experience</Link></li>
                        <li className="mb-5 font-normal"><Link to="/docs/5.3/examples/starter-template/">Data Science & Visualisation</Link></li>
                        <li className="mb-5 font-normal"><Link to="#webpack/">Salesforce Consulting</Link></li>
                        <li className="mb-5 font-normal"><Link to="#parcel/">Cyber Security</Link></li>
                        <li className="mb-5 font-normal"><Link to="#vite/">Talent Augmentation</Link></li>
                        <li className="font-normal"><Link to="#vite/">Products</Link></li>
                      </ul>
                    </div>
                    <div className="">
                        <h5 className="fs-6 font-bold">Industries</h5>
                      <ul className="list-unstyled">
                        <li className="mb-5 font-normal"><Link to="https://github.com/twbs/bootstrap" target="_blank" rel="noopener">Healthcare</Link></li>
                        <li className="mb-5 font-normal"><Link to="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank" rel="noopener">Financial Services</Link></li>
                        <li className="mb-5 font-normal"><Link to="https://github.com/twbs/icons" target="_blank" rel="noopener">Manufacturing</Link></li>
                        <li className="mb-5 font-normal"><Link to="https://github.com/twbs/rfs" target="_blank" rel="noopener">Education</Link></li>
                        <li className="mb-5 font-normal"><Link to="https://github.com/twbs/examples/" target="_blank" rel="noopener">Retail & Consumer good</Link></li>
                        <li className="font-normal"><Link to="https://github.com/twbs/examples/" target="_blank" rel="noopener">Telecommunication</Link></li>
                      </ul>
                    </div>
                    <div className="">
                        <h5 className="fs-6 font-bold">Resources</h5>
                      <ul className="list-unstyled">
                        
                        <li className="mb-5 font-normal"><Link to="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Case studies</Link></li>
                        <li className="font-normal"><Link to="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank" rel="noopener">Blogs</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container">
                    <div className="footer_logo">
                        <img src="assets/img/footerbg_logo.png" alt="Cyberelite" className="" />
                      </div>
                </div>
                
              </footer>
              
        </div>
        </section>
        </>
        );
  };
export default Footer;