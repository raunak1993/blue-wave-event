import React from "react";
import styles from "./style.module.css";
const Landing = (props) =>

    (<div className = {styles.landing} style ={{backgroundImage: `url(${props.src})`}}>
    </div>
    )
    


export default Landing;