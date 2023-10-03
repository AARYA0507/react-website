import "./about.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
export default function About()
{
    return(
        <div className="footer-container">

            <Navbar/>
            <h1 className="about-head">About</h1>
            <p className="about-head">This is About Page</p>

            <Footer/>
        </div>
    )
}