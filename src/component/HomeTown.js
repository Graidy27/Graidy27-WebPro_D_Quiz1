import React, {useEffect} from 'react'
import '../App.css'
import foto1 from "../assets/cirebon.jpg"
import foto2 from '../assets/turis1.jpg'
import foto3 from "../assets/turis2.jpeg"
import foto4 from "../assets/food1.jpg"
import foto5 from "../assets/food4.jpg"

const HomeTown = () => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " activeDot";
    setTimeout(showSlides, 6500); // Change image every 3.5 seconds
  }
}, []);
  return (
    <>
    {/* CAROUSEL 2 */}
      {/* <div className='d-flex justify-content-center'> */}
        <br/>
        <div>
            <div className="d-flex justify-content-center">
                <div className="slideshow-container" id="carouselAnimation2">
                    <div className="mySlides elementToFadeInAndOut">
                        <img src={foto1} className="img-responsive imgCarousel" style={{margin: 'auto'}}/>
                        <br/>
                    </div>   
                    <div className="mySlides elementToFadeInAndOut">
                        <img src={foto2} className="img-responsive imgCarousel" style={{margin: 'auto'}}/>
                        <br/>
                    </div>     
                    <div className="mySlides elementToFadeInAndOut">
                        <img src={foto3} className="img-responsive imgCarousel" style={{margin: 'auto'}}/>
                        <br/>
                    </div>   
                    <div className="mySlides elementToFadeInAndOut">
                        <img src={foto4} className="img-responsive imgCarousel" style={{margin: 'auto'}}/>
                        <br/>
                    </div>  
                    <div className="mySlides elementToFadeInAndOut">
                        <img src={foto5} className="img-responsive imgCarousel" style={{margin: 'auto'}}/>
                        <br/>
                    </div>  
                </div>
              </div>
              <div className="d-flex justify-content-center">
                    {/* {{-- ini masih error bulet buletnya. --}} */}
                <div style={{textAlign: 'center'}}>
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                </div>
            </div> 
        {/* </div> */}
        <div className='container mt-3'>
        <h1 className='text-center fs-2 mb-3 underline-style fw-bold'><u>Cirebon City</u></h1>

          <h1 className='text-center fs-5 px-24'>Cirebon city is located in the West Java Province, by the northern coast in Indonesia. The city is also fondly called City of Shrimps (Kota Udang). It shares the Central Java Provincial border with Jakarta and lies approximately 297 kilometres away from the city. Since Cirebon occupies only 37 square kilometres, it can be explored just on a day-long trip from Jakarta.

Cirebon has influences of Javanese, Sudanese, Chinese, Arab, Indian and European cultures. Cirebon is also famous for its art, craft, sports and food. It was once the land of a powerful Cirebon Sultanate who ruled the region in the 15th and the 16th century. Cirebon is replete with examples of buildings that portray its cultural heritage such as the Keraton Kasepuhan.</h1>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
      
      
    </>
  )
}

export default HomeTown