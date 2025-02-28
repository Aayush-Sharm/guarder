import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <><section className="info_section ">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="info_logo">
                            <Link className="navbar-brand" to="index.html">
                                <span>Guarder</span>
                            </Link>
                            <p>
                                dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam,
                                quisdotempor incididunt r
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_links">
                            <h5>Useful Link</h5>
                            <ul>
                                <li>
                                    <Link to="">dolor sit amet, consectetur</Link>
                                </li>
                                <li>
                                    <Link to="">magna aliqua. Ut enim ad</Link>
                                </li>
                                <li>
                                    <Link to="">minim veniam,</Link>
                                </li>
                                <li>
                                    <Link to="">quisdotempor incididunt r</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_info">
                            <h5>Contact Us</h5>
                        </div>
                        <div className="info_contact">
                            <Link to="" className="">
                                <i className="fa fa-map-marker" aria-hidden="true" />
                                <span>Lorem ipsum dolor sit amet,</span>
                            </Link>
                            <Link to="" className="">
                                <i className="fa fa-phone" aria-hidden="true" />
                                <span>Call : +01 1234567890</span>
                            </Link>
                            <Link to="" className="">
                                <i className="fa fa-envelope" aria-hidden="true" />
                                <span>demo@gmail.com</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_form ">
                            <h5>Newsletter</h5>
                            <form action="#">
                                <input type="email" placeholder="Enter your email" />
                                <button>Subscribe</button>
                            </form>
                            <div className="social_box">
                                <Link to="">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </Link>
                                <Link to="">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </Link>
                                <Link to="">
                                    <i className="fa fa-youtube" aria-hidden="true" />
                                </Link>
                                <Link to="">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <footer className="container-fluid footer_section">
                <p>
                    © <span id="currentYear" /> All Rights Reserved. Design by
                    <Link to="https://html.design/">Free Html Templates</Link>
                </p>
            </footer>

        </>
    )
}
export default Footer;