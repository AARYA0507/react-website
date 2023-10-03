import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./contact.css";
export default function Contact()
{
    return(
        <div className="contact-container">

            <Navbar/>
            <h1 className="contact-head">Contact</h1>
            <p className="contact-head">This is Contact Page</p>

            <Footer/>
        </div>
    );
}