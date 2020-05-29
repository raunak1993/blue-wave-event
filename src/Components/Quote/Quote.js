import React from "react";
import styles from "./style.module.css";
import Divider from "../Divider/Divider";
const Quote = (props)=>{
    return (<div className = {styles.quote}>
        
            <span className = {styles.start}><i className = "fa fa-quote-left"></i></span>
            <p className = {styles.main}>
                {props.line}
            </p>
            {/* <p className= "quote-end">
                |
            
        </p> */}
    </div>)
}
export default Quote;