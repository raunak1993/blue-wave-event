import React from "react";
import styles from "./Title1.module.css";
const Title1 = (props) =>{
    return (<div className = {styles.container}>
    {props.text}
    </div>)
}
export default Title1;