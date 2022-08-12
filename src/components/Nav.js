import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Nav.css';

function Nav() {

  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavBar(window.scrollY > 100)
    })
  
    return () => {
      // window.removeEventListener('scroll');
    }
  }, [])
  

  return (
    <div className={`nav-container ${navBar && 'nav-container-black'}`}>
      <img className='nav-logo' alt='netflix-logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'></img>
      <img className='nav-avatar' alt='netflix-avatar' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png'/>
    </div>
  )
}

export default Nav