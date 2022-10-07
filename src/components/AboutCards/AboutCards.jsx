// import Card from '../ServicesCard/ServicesCard'
// import Images from "../../assets/imagenes"
import './AboutCards.css'

function AboutCards() {
   return (
      <div className='container__cards'>

         <li className='card_container m-5'>
            <div className='circle'></div>
            <h4 className="card_about_title">Mision</h4>
            <p className="card_about_p">Lorem ipsum dolor sit amet, consectetuer
               adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore
               magna aliquam erat volutpat. Ut wisi
               enim ad minim veniam, quis nostrud</p>
         </li>
         <li className="card_container m-5">
            <div className='circle'></div>
            <h4 className="card_about_title">Vision</h4>
            <p className="card_about_p">Lorem ipsum dolor sit amet, consectetuer
               adipiscing elit, sed diam nonummy
               nibh euismod tincidunt ut laoreet dolore
               magna aliquam erat volutpat. Ut wisi
               enim ad minim veniam, quis nostrud</p>
         </li>

      </div>
   )
}

export default AboutCards;