// import Card from '../ServicesCard/ServicesCard'
// import Images from "../../assets/imagenes"
import "./AboutCards.css";

function AboutCards() {
   return (
      <div className='container_about_cards'>

         <li className='card_container '>
            <div className='card__circle'></div>
            <div className="text_card" >

            <h4 className="card_about_title">Mision</h4>
            <p className="card_about_p">Lorem ipsum dolor sit amet, consectetuer
               adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore
              </p>
            </div>
         </li>
         <li className="card_container ">
            <div className='card__circle'></div>
            <div className="text_card">
            <h4 className="card_about_title">Vision</h4>
            <p className="card_about_p">Lorem ipsum dolor sit amet, consectetuer
               adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore
               </p>
            </div>
         </li>

      </div>
   )
}

export default AboutCards;
