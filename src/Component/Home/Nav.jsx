import React,{useState}from 'react';
import {Link,NavLink} from 'react-router-dom'

import logo from '../images/logo.svg';
import  closed from '../images/icon-close.svg';
import hamburger from '../images/icon-hamburger.svg';
import './Nav.css';




const Nav=()=>{

    const [open,setOpen]=useState(false);  
    const[underline,setUnderline]=useState('')


    return(
        <>
       <nav className='navbar'>
          
           <Link to="/Landing" className="nav-logo"  onClick={()=>setOpen(false)}>
           <img src={logo} className='Nav_logo'/>
           </Link>
           
           <div onClick={()=>
           setOpen(!open)} className="nav-icon">
               
               <img src= {open ? `${closed}`:`${hamburger}`}/>
           </div>

           <ul className={open ? 'active nav-links ':'nav-links'}>
               <li className="nav-item">
               <NavLink className={({ isActive})=> isActive ? "nav-linkActive":"nav-link"}to=""  
               onClick={()=>setOpen(false)}>
               Home
           </NavLink>
               </li>
               <li className='nav-item'>
                <NavLink className={({ isActive})=> isActive ? "nav-linkActive":"nav-link"}
          
            
            to=""  onClick={()=>setOpen(false)}>
               Destination
           </NavLink>
               </li>
               <li className='nav-item'>
               <NavLink className={({ isActive})=> isActive ? "nav-linkActive":"nav-link"}to=""  onClick={()=>setOpen(false)}>
               Crew
           </NavLink>
               </li>
               <li className='nav-item'>
               <NavLink className={({ isActive})=> isActive ? "nav-linkActive":"nav-link"} to=""  onClick={()=>setOpen(false)}>
               Technology
           </NavLink>
               </li>
               
           </ul>
           
       </nav>
        </>
    )
}
export default Nav;