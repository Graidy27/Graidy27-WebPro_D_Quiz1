import React, {useEffect} from 'react'
import '../App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"

const Home = () => {
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
                    {/* <div className="mySlides elementToFadeInAndOut">
                        <img src={foto1} className="img-responsive imgCarousel" style={{margin: 'auto'}}/>
                        <br/>
                    </div>   
                    <div className="mySlides elementToFadeInAndOut">
                        <img src={foto2} className="img-responsive imgCarousel" style={{margin: 'auto'}}/>
                        <br/>
                    </div>  
                    <div className="mySlides elementToFadeInAndOut">
                        <img src={foto2} className="img-responsive imgCarousel" style={{margin: 'auto'}}/>
                        <br/>
                    </div>   */}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                    {/* {{-- ini masih error bulet buletnya. --}} */}
                <div style={{textAlign: 'center'}}>
                    <span className="dot"></span> 
                    <span className="dot"></span> 
                    {/* <span className="dot"></span> 
                    <span className="dot"></span> 
                    <span className="dot"></span>  */}
                </div>
            </div> 
        {/* </div> */}
        <div className='container mt-3'>
          <h1 className='text-center fs-1'>Welcome to my blog!</h1>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <button type="button" className="btn btn-info"><Link to="/quiz1/profile">More about me!</Link></button>
        </div>
      </div>
      
      
    </>
  )
}

export default Home