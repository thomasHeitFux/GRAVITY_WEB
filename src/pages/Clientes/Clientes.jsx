import {
  Navbar,
  Footer,
  CustomersHeader,
  CustomersData,
  CustomersImages,
  CustomerCard
} from "../../components";
import clientsJSON from "../../utils/clients.json"
import './clientes.css'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";



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


  const [index, setIndex] = useState(0)
 useEffect(()=>{
  setTimeout(()=>{ index < 2 ? setIndex(index+1) : setIndex(0)}, 3000);
 }, [index]);

console.log(index);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}}>
      <section className="customers__section">
        <h3 className="title__section" id="customers">Clientes</h3>
        <CustomersHeader name={clientsJSON.data[index].name} banner={clientsJSON.data[index].img.banner} />
        <CustomersData name={clientsJSON.data[index].name} description={clientsJSON.data[index].description}/>
        <CustomersImages img={clientsJSON.data[index].img} />
        <div className="customers__list container">
          <h3 className="customers__list__title" id="moreProjects">Mas proyectos</h3>
          <div className="customers__list__container">
            {
              clientsJSON.data.map(c => (
                <CustomerCard key={clientsJSON.data.indexOf(c)} img={c.img.mockup[4]} name={c.name} description={c.description.l}/>
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
