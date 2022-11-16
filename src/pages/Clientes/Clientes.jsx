import {
  Footer,
  CustomersHeader,
  CustomersData,
  CustomersImages,
  CustomerCard,
} from "../../components";
import clientsJSON from "../../utils/clients.json";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Clientes() {
  const links = [
    {
      title: "Clientes",
      to: "customers",
    },
    {
      title: "Mas proyectos",
      to: "moreProjects",
    },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      index < 2 ? setIndex(index + 1) : setIndex(0);
    }, 100000);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      margin="0"
    >
      <section className="">
        <h3
          className="text-2xl lg:text-4xl bold mt-3 mb-3 text-center text-azul"
          id="AbautHeader"
        >
          Clientes
        </h3>
        <CustomersHeader
          name={clientsJSON.data[index].name}
          banner={clientsJSON.data[index].img.banner}
          description={clientsJSON.data[index].description.l}
        />
        <CustomersData
          name={clientsJSON.data[index].name}
          description={clientsJSON.data[index].description}
        />
        <CustomersImages img={clientsJSON.data[index].img} />
        <h3 className="text-azul text-2xl font-bold my-5 flex justify-center md:hidden">
          Más de nuestro clientes
        </h3>
        <div className="w-full max-w-6xl m-auto px-5 grid gap-4 grid-cols-2 justify-between items-center mb-5">
          {clientsJSON.data.map((c) => (
            <CustomerCard
              key={clientsJSON.data.indexOf(c)}
              img={c.img.mockup[4]}
              name={c.name}
              description={c.description.e}
              hidden={clientsJSON.data.indexOf(c) === index ? "hidden" : ""}
            />
          ))}
        </div>
      </section>
      <Footer links={links} />
    </motion.div>
  );
}

export default Clientes;
