import React from "react";
import styles from "./style.module.css";
import Divider from "../Divider/Divider";
const Quote = (props)=>{
    return (<div className = {styles.quote}>
        
            <span className = {styles.start}><i class = "fa fa-quote-left"></i></span>
            <p className = {styles.main}>
            Leave it on Blue Waves to make any event truly memorable.
            </p>
            {/* <p className= "quote-end">
                |
            
        </p> */}
    
    </div>)
}
export default Quote;