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
  setTimeout(()=>{ index < 2 ? setIndex(index+1) : setIndex(0)}, 10000);
 }, [index]);


  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1}} margin="0">
      <section className="">
        <h3 className="my-10 text-3xl text-azul flex justify-center" id="customers">Clientes</h3>
        <CustomersHeader name={clientsJSON.data[index].name} banner={clientsJSON.data[index].img.banner} description={clientsJSON.data[index].description.l}/>
        <CustomersData name={clientsJSON.data[index].name} description={clientsJSON.data[index].description}/>
        <CustomersImages img={clientsJSON.data[index].img} />
          {/* <h3 className="customers__list__title" id="moreProjects">Mas proyectos</h3> */}
          <div className="flex flex-row justify-center mx-10 my-36 gap-20">
            {
              clientsJSON.data.map(c => (
                <CustomerCard key={clientsJSON.data.indexOf(c)} img={c.img.mockup[4]} name={c.name} description={c.description.l}/>
              ))
            }
          </div>
      </section>
      <Footer links={links}/>
    </motion.div>
  );
}

export default Clientes;
