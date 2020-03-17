import React from "react";
import styles from "./Header.module.css";

const Header = (props) =>{
return (

<div className = {styles.container}>
        <div className = {styles.logo}><img src= {props.src} alt = "alt"></img></div>
        <span className='header_text'>BLUE WAVES</span>
        <span className={styles.white_heading}>EVENT MANAGEMENT SPECIALIZATION</span> 
 </div>
 )

}
export default Header;