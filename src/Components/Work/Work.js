import React from "react";
import styles from "./Work.module.css";
import IMG1 from "../../assets/Home/event1.png";
import IMG2 from "../../assets/Home/event2.png";
import IMG3 from "../../assets/Home/event3.png";
import IMG4 from "../../assets/Home/event4.png";
import {Link} from "react-router-dom";
import cx from "classnames";


const Work = () =>{

    return (<div className = {styles.work}>
        <div className = {styles.text}>Our Work</div>
        
        <div className = {styles.main}>
    
            <div className = {styles.image}>
            <Link to = "/portfolio"><img src = {IMG1} alt = "img1"/></Link>
            </div>
            <div>
            <div className = {styles.image}><Link to = "/portfolio"><img src = {IMG2} alt = "img2"/></Link></div>
            <div className = {styles.image}><Link to = "/portfolio"><img src = {IMG3} alt = "img3"/></Link></div>
            </div>
            <div className = {cx(styles.image,styles.thirdImage)}>
            <Link to = "/portfolio"><img src = {IMG4} alt = "img4"/></Link>
            </div>
        
        </div>
        </div>)



}
export default Work;