import {
  Navbar,
  Footer,
  CustomersHeader,
  CustomersData,
  CustomersImages,
  CustomerCard
} from "../../components";
import clientsJSON from "../../clients.json"
import './clientes.css'
import { motion } from "framer-motion";

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
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}>
      <section>
        <h3 className="title__section" id="customers">Clientes</h3>
        <CustomersHeader name={clientsJSON.data[0].name} banner={clientsJSON.data[0].img.banner} />
        <CustomersData name={clientsJSON.data[0].name} description={clientsJSON.data[0].description}/>
        <CustomersImages img={clientsJSON.data[0].img} />
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
    </motion.div>
  );
}

export default Clientes;
