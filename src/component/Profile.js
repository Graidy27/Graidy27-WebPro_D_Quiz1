import React, {useState} from 'react'
import '../App.css'
import photo from '../assets/graidy.jpg'
import Typical from 'react-typical'

const Profile = () => {
  const [more, setMore] = useState(false)

  return (
    <div className='container mt-3'>
        <div>
          <div className='d-flex justify-content-center mb-4'>
            <img className='image-profile' src={photo} alt="" width="20%" height="20%" />
          </div>
          <div className='d-flex justify-content-center'>
            <h1>Hi, I'm Graidy Megananda</h1>
          </div>
          <div className='d-flex justify-content-center'>
              <p>I'm a
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    ' developer',
                    1000,
                    ' gamer',
                    1000,
                    ' guitarist',
                    1000
                  ]}
                />
              </p>
          </div>
        </div>
        {more === false ? (
          <div className='d-flex justify-content-center mt-10'>
            <p className='button-more' onClick={() => setMore(true)}>More...</p>
          </div>
        ) : (
          <>
            <div className='d-flex justify-content-center mt-10'>
              <p className='text-center fs-5 px-24'>I'm a computer science undergraduate student at Sepuluh Nopember Institute of Technology. I currently live in Surabaya. In my spare time, I love to listen to music, play games, or play guitar</p>
            </div>
            <div className='d-flex justify-content-center mt-10'>
              <p className='button-more' onClick={() => setMore(false)}>less</p>
            </div>
          </>
          
        )}
        
    </div>
    
  )
}

export default Profile