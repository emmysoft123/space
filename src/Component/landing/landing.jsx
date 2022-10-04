import React from 'react'
import Nav from '../Home/Nav';
import img1 from '../images/background-home-desktop.jpg';
import img2 from '../images/background-home-mobile.jpg';
import img3 from '../images/background-home-tablet.jpg';
import './landing.css';
import LandingWriteup from './text';


function Landing() {
  return (
    <div>
        
        <div className='main_page_container'>
         <div className='desktop_view'>
          <div className='color'style={{backgroundImage:`url(${img1})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",
        width:'100vw',height:'100vh'}}>
           <Nav/>
           <LandingWriteup/>
          </div>
          </div>
           <div className='mobile-view'>
          <div style={{backgroundImage:`url(${img2})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",
        width:'100vw',height:'100vh'}}>
             <Nav/>
        <LandingWriteup/>
          </div>
</div>

         
<div className='tablet-view'>
          <div style={{backgroundImage:`url(${img3})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",
        width:'100vw',height:'100vh'}}>
             <Nav/>
             <LandingWriteup/>
          </div>
</div>


        </div>
         
 
    </div>
  )
}

export default Landing