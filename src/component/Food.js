import React from 'react'
import foto1 from '../assets/foto1.jpg'
import '../App.css'
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.jpg"
import food4 from "../assets/food4.jpg"

const Food = () => {
  return (
    <div className='container mt-3'>
      <h1 className='text-center fs-1 mb-3 underline-style fw-bold'><u>Local Food in Cirebon</u></h1>
      <div className='mt-2 mb-2 d-flex justify-content-center w-auto p-3'>
        <div className='w-25 mx-5'>
          <img src={food1} alt=""/>
          <br/>
          <h1 className='text-center fw-bold'>Tahu Gejrot</h1>
        </div>
        <div className='w-75 mx-5'>
          <p className='text-break'>Tahu Gejrot is an Indonesian fried tofu in sweet spicy sauce from Cirebon, a port city in West Java, Indonesia. Tahu gejrot consists of tahu pong, a type of hollow tahu goreng (fried tofu) cut into small pieces. It is served with a thin and watery dressing that is made by blending palm sugar, vinegar and sweet soy sauce. It is usually served in a small earthenware bowl or layah, with ground garlic, pounded shallot and hot bird's eye chili cut into pieces to add spiciness. Tahu gejrot is usually served in a clay plate.</p>
        </div>
      </div>
      <hr/>
      <div className='mt-2 mb-2 d-flex justify-content-center w-auto p-3'>
        <div className='w-25 mx-5'>
          <img src={food2} alt=""/>
          <br/>
          <h1 className='text-center fw-bold'>Mie Koclok</h1>
        </div>
        <div className='w-75 mx-5'>
          <p className='text-break'>Mie koclok or "shaked noodle", is an Indonesian chicken noodle soup, a specialty of Cirebon city, West Java. The noodles come with a white-colored extra-thick porridge-like soup, made of chicken broth and coconut milk soup, which is coagulated with corn starch or tapioca. Other ingredients include shredded chicken breast, cabbage, bean sprouts, hard boiled egg, kaffir lime juice, and sprinkled with sliced fresh celery, spring onion, and fried shallot.[1]

In Cirebonese dialect the term koclok means "shake", it refers to the method of softening and cooking the noodle by shaking the noodle placed in handled porous tin container, while being simmered in hot water. The dish commonly uses thick yellow egg noodle, but some might add bihun (rice vermicelli).

To add taste, spiciness and texture, kecap manis (sweet soy sauce), sambal and emping crackers might be added. A similar-named but slightly different beef-based noodle dish from neighboring city of Bandung is called mie kocok.</p>
        </div>
      </div>
      <hr/>
      <div className='mt-2 mb-2 d-flex justify-content-center w-auto p-3'>
        <div className='w-25 mx-5'>
          <img src={food3} alt=""/>
          <br/>
          <h1 className='text-center fw-bold'>Nasi Jamblang</h1>
        </div>
        <div className='w-75 mx-5'>
          <p className='text-break'>Nasi jamblang (Cirebonese: sega jamblang) is a typical food of Cirebon, West Java. The "jamblang" term comes from the name of the region to the west of the city of Cirebon, home of the food vendors. The characteristic of these foods is the usage of teak leaves to pack the rice. The dish is served via a buffet.</p>
        </div>
      </div>
      <hr/>
      <div className='mt-2 mb-2 d-flex justify-content-center w-auto p-3'>
        <div className='w-25 mx-5'>
          <img src={food4} alt=""/>
          <br/>
          <h1 className='text-center fw-bold'>Empal Gentong</h1>
        </div>
        <div className='w-75 mx-5'>
          <p className='text-break'>Empal gentong is a spicy Indonesian curry-like beef soup originating in Cirebon, West Java. It is similar to gulai that is usually cooked with firewood in a gentong stove (Javanese for: clay pot). The ingredients include cuts of beef, and cow offal such as intestine, tripes, lungs, etc. cooked with curry-like spices in coconut milk, kucai and sambal in the form of chilli powder. Empal gentong can be eaten with steamed rice, ketupat or lontong. Empal gentong originated from Battembat, Tengah Tani, Cirebon Regency.</p>
        </div>
      </div>
    </div>
  )
}

export default Food