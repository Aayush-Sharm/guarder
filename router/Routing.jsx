import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/contact";
import Service from "../pages/service";
import Guard from "../pages/guard";
import Home from "../pages/Home";
import Header from "../components/header";
import Footer from "../components/footer";

const Routing = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/guard" element={<Guard />} />
            </Routes>
            <Footer/>
        </>

    )
}
export default Routing;