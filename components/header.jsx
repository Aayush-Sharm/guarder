import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="hero_area">
                {/* header section start */}
                <div className="hero_bg_box">
                    <div className="img-box">
                        <img src="images/hero-bg.jpg" alt="" />
                    </div>
                </div>
                <header className="header_section">
                    <div className="header_top">
                        <div className="container-fluid">
                            <div className="contact_link-container">
                                <Link to="" className="contact_link1">
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                    <span>Lorem ipsum dolor sit amet,</span>
                                </Link>
                                <Link to="" className="contact_link2">
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    <span>Call : +01 1234567890</span>
                                </Link>
                                <Link to="" className="contact_link3">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <span>demo@gmail.com</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container">
                                <Link className="navbar-brand" to="index.html">
                                    <span>Guarder</span>
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="" />
                                </button>
                                <div
                                    className="collapse navbar-collapse ml-auto"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">
                                                Home <span className="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">
                                                {" "}
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/service">
                                                {" "}
                                                Services{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/guard">
                                                {" "}
                                                Guards{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">
                                                Contact us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* end header section */}
                {/* slider section */}
                <section className=" slider_section ">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Your Saftey <br />
                                                    <span>Our Responsibility</span>
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <div className="btn-box">
                                                    <Link to="" className="btn-1">
                                                        {" "}
                                                        Read more{" "}
                                                    </Link>
                                                    <Link to="" className="btn-2">
                                                        Get A Quote
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Your Saftey <br />
                                                    <span>Our Responsibility</span>
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <div className="btn-box">
                                                    <Link to="" className="btn-1">
                                                        {" "}
                                                        Read more{" "}
                                                    </Link>
                                                    <Link to="" className="btn-2">
                                                        Get A Quote
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Your Saftey <br />
                                                    <span>Our Responsibility</span>
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod magna aliqua. Ut enim ad minim veniam
                                                </p>
                                                <div className="btn-box">
                                                    <Link to="" className="btn-1">
                                                        {" "}
                                                        Read more{" "}
                                                    </Link>
                                                    <Link to="" className="btn-2">
                                                        Get A Quote
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container idicator_container">
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
           </div>
            

        </>
    )
}
export default Header;