import {
  Navbar,
  Header,
  ProjectsHome,
  ServicesHome,
  StartHome,
  ServicesOffer,
  InformationHome,
  SubscribeHome,
  Footer,
} from "../../components";

function Home() {
  const links = [
    {
      title: "Nuestros proyectos",
      to: "Projects",
    },
    {
      title: "Nuestros servicios",
      to: "Services",
    },
    {
      title: "¿No sabes donde comenzar?",
      to: "StartHome",
    },
    {
      title: "E-Books 100% gratis",
      to: "Ebook",
    },
    {
      title: "¿Quienes somos?",
      to: "InromationHome",
    },
    {
      title: "Suscribete a nuestra comunidad",
      to: "SuscribeHome",
    },
  ];
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <ProjectsHome />
      <ServicesHome />
      <StartHome />
      <ServicesOffer />
      <InformationHome />
      <SubscribeHome />
      <Footer links={links}/>
    </div>
  );
}

export default Home;
