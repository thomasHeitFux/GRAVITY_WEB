import {
  Navbar,
  Footer,
  CustomersHeader,
  CustomersData,
  CustomersImages,
  CustomerCard
} from "../../components";
import './clientes.css'

const cards = [1, 2, 3, 4, 5, 6]

function Clientes() {
  const links = [
    {
      title: "Clientes",
      to: "customers"
    },
    {
      title: "Mas proyectos",
      to: "moreProjects"
    }
  ]

  return (
    <>
      <Navbar />
      <section>
        <h3 className="title__section" id="customers">Clientes</h3>
        <CustomersHeader />
        <CustomersData />
        <CustomersImages />
        <div className="customers__list container">
          <h3 className="customers__list__title" id="moreProjects">Mas proyectos</h3>
          <div className="customers__list__container">
            {
              cards.map(card => (
                <CustomerCard key={card}/>
              ))
            }
          </div>
        </div>
      </section>
      <Footer links={links}/>
    </>
  );
}

export default Clientes;
