import React from 'react'
import '../App.css'
import turis1 from "../assets/turis1.jpg"
import turis2 from "../assets/turis2.jpeg"
import turis3 from "../assets/turis3.jpg"
import turis4 from "../assets/turis4.jpg"

const Tourist = () => {
  return (
<div className='container mt-3'>
      <h1 className='text-center fs-2 mb-3 underline-style fw-bold'><u>Tourist Location in Cirebon</u></h1>
      <div className='mt-2 mb-2 d-flex justify-content-center w-auto p-3'>
        <div className='w-25 mx-5'>
          <img src={turis1} alt=""/>
          <br/>
          <h1 className='text-center fw-bold'> Batik Trusmi</h1>
        </div>
        <div className='w-75 mx-5'>
          <p className='text-break'>Kampung Batik Trusmi is famous for its Batik Industry. The attraction is located about 8 kilometres away from Cirebon City and is a significant attraction for Batik artwork. The works created in the neighbouring villages like Trusmi, Kaliwulu, Gamel, Wotgali and Kalitengah are brought together at this attraction.

The source of Batik in this region has been tracked to the 17th century. Locals were taught this art form by a follower of Sunan Gunung Jati - One of the 9 most important Islamic saints in Indonesia. At present, Kampung Batik Trusmi is responsible for providing jobs to over 3000 workers living in these villages. Tourists exploring Cirebon often visit Trusmi to purchase the Batik artwork at one of the several stores/ showrooms near the attraction.</p>
        </div>
      </div>
      <hr/>
      <div className='mt-2 mb-2 d-flex justify-content-center w-auto p-3'>
        <div className='w-25 mx-5'>
          <img src={turis2} alt=""/>
          <br/>
          <h1 className='text-center fw-bold'>Keraton Kasepuhan</h1>
        </div>
        <div className='w-75 mx-5'>
          <p className='text-break'>A 16th-Century wonder, Keraton Kasepuhan is the home to the Sultan of Kasepuhan and is one of the 4 “Kraton” or palaces in Cirebon the other 3 being Keraton Kacirebonan, Keraton Kanoman and Keraton Keprabon. This palace is not only one of the oldest ones in Cirebon but is also one of the largest palaces with throne rooms. Keraton Kasepuhan is definitely an exquisite attraction for local as well as international visitors, considering it reflects on the fusion of architectures between Hindu, Islamic, Dutch as well as Chinese influences.

This Palace is strategically located in West Java, facing the Sang Cipta Rasa Grand Mosque to its west side, and the Lawang Sanga building on the banks of the Krayan River, to its south side. This site was the tax and customs office during the reign of the Cirebon kingdom, signifying wealth and good fortune for this palace. Keraton Kasepuhan, spread across 10 hectares of land and trademarked by red bricks, is truly an epitome of multi-culture and tradition and should definitely be on your list when in Cirebon.</p>
        </div>
      </div>
      <hr/>
      <div className='mt-2 mb-2 d-flex justify-content-center w-auto p-3'>
        <div className='w-25 mx-5'>
          <img src={turis3} alt=""/>
          <br/>
          <h1 className='text-center fw-bold'>Mount Ciremai</h1>
        </div>
        <div className='w-75 mx-5'>
          <p>Mount Ciremai, also known as Mount Cereme, is a type of stratovolcano mountain. Stratovolcanoes are explosive eruptions that occur due to the high gas concentration in the magma. It is located in West Java, Indonesia. The last eruption took place in this mountain was in 1951. It is the highest point in West Java with an altitude of 3078 meters. There are many tourist spots on the mountain including cafes and parks which attract the visitors. 

Linggajati museum on the slopes of the mountain is a great attraction for tourists. The museum holds records of the historical event, that is, the Linggadjati Agreement. Tourists mostly visit Mt Ciremai for hiking. The climb takes roughly about 12 hours, which may differ based on your physical strength and fitness. Should you choose to hike this beautiful vista, there are also a couple of camping spots available at the peak of the mountain.</p>
        </div>
      </div>
      <hr/>
      <div className='mt-2 mb-2 d-flex justify-content-center w-auto p-3'>
        <div className='w-25 mx-5'>
          <img src={turis4} alt=""/>
          <br/>
          <h1 className='text-center fw-bold'>Pemandian Cibulan</h1>
        </div>
        <div className='w-75 mx-5'>
          <p className='text-break'>Pemandian Cibulan is a bath or a pond and is a collection of hot springs located in the Cirebon Regency of West Java Province, Indonesia. It is a famous tourist attraction in Cirebon and draws visitors from around the country looking for a relaxing time away from quotidian life. The attraction consists of two pools of differing depths. Both of these pools are inhabited by fish considered to be holy by locals and are harmless to visitors that take a dip. The water too is clean with springwater-like clarity, ensuring a great day out in the sun.

Pemandian Cibulan occupies an area of about 2.5 acres and consists of two large rectangular pools, which are also referred to as artificial ponds. One of these pools measures 525 square metres while the other roughly 675 square metres and both run only 2 metres deep. It is an excellent place for local families who want to take their children for a day-long outing on a hot day.</p>
        </div>
      </div>
    </div>
  )
}

export default Tourist