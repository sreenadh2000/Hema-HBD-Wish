import Image from 'react-bootstrap/Image';
import Btm from "../assets/images/Btm.jpg"
import { Container } from 'react-bootstrap';
import React, {useEffect,useState} from 'react';

function BottomPage() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Add a delay to show the text with the animation
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Container fluid className='m-0 p-0 text-center position-relative'>
       <div className="justify-content-center align-items-center position-absolute pop-text-container">
        <div>
      {showText && (
        <h1 className="pop-text">
          🎉 Happy Birthday 
          Hema! 🎂
        </h1>
      )}
      <p className='mt-5 fs-5 '>- by Sreenadh.</p></div>
    </div>
    <div className='='>
    <Image src={Btm} fluid alt='bottom photo' className='responsive-img responsive-btm-img'/>
    </div>
    </Container>
  )
  
}

export default BottomPage;