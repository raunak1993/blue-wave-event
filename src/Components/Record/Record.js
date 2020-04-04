import React from "react";
import  styles from "./Record.module.css";
const Record = props =>{
    return (
        <div className = {styles.container}>
            <div className = {styles.content}>

                <div className = {styles.one}>
                <div className = {styles.info}>
                    <i className = "fa fa-newspaper-o fa-4x"></i>
                    <div className = {styles.details}>
                        <div className ={styles.numbers}>300+</div>
                        <p>EVENTS COMPLETED</p>
                    </div>
                </div>


                <div className = {styles.info}>
                    <i className = "fa fa-user fa-4x"></i>
                    <div className = {styles.details}>
                        <div className ={styles.numbers}>15000+</div>
                        <p>GUESTS SERVED</p>
                    
                </div>
                </div>
                </div>
            
                <div className = {styles.two}>
                <div className = {styles.info}>
                    <i className = "fa fa-tripadvisor fa-4x"></i>
                    <div className = {styles.details}>
                        <div className ={styles.numbers}>70+</div>
                        <p>DESTINATION COVERED</p>
                    
                </div>
                </div>

                <div className = {styles.info}>
                    <i className = "fa fa-handshake-o fa-4x"></i>
                    <div className = {styles.details}>
                        <div className ={styles.numbers}>5+</div>
                        <p>YEARS IN SERVICE</p>
                    
                </div>
                </div>
                </div>
        </div>
        </div>
    )
}
export default Record;