import { Navbar, Footer, HeadContact, SectionContact } from "../../components";

function Contact() {
    const links = [
        {
            title: "Agenda aqui",
            to: "scheduleHere"
        }
    ]
    return (
        <div className="Contact">
            <Navbar />
            <HeadContact />
            <SectionContact />
            <Footer links={links}/>
        </div>
    );
}

export default Contact;
