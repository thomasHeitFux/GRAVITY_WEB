import {
    Navbar,
    Header,
    ProjectsHome,
    ServicesHome,
    StartHome,
  } from "../../components";
  
  function Home() {
    return (
      <div className="Home">
        <Navbar />
        <Header />
        <ProjectsHome />
        <ServicesHome />
        <StartHome />
      </div>
    );
  }
  
  export default Home;
  