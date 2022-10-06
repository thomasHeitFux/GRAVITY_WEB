import {
    Navbar,
    Header,
    ProjectsHome,
    ServicesHome,
    StartHome,
    ServicesOffer,
    InformationHome,
    SubscribeHome,
    Footer
  } from "../../components";
  
  function Home() {
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
        <Footer />
      </div>
    );
  }
  
  export default Home;
  