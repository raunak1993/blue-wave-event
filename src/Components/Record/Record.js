import React from "react";
import  styles from "./Record.module.css";
const Record = props =>{
    return (
        <div className = {styles.container}>
            
        

            <div className = {styles.content}>
            

    
            
            <div className = {styles.info}>
                    <i className = "fa fa-newspaper-o fa-3x"></i>
                    <p className = {styles.numbers}>300+</p>
                    <p className = {styles.detail}>EVENTS<br/>COMPLETED</p>
            </div>


                <div className = {styles.info}>
                    <i className = "fa fa-user fa-3x"></i>
                    
                        
                        <p className ={styles.numbers}>15000+</p>
        
                    
                        <p className = {styles.detail}>GUESTS SERVED</p>
                    
            
                </div>
            
                
                <div className = {styles.info}>
                    <i className = "fa fa-tripadvisor fa-3x"></i>
                    
                        <p className ={styles.numbers}>70+</p>
                        <p className = {styles.detail}>DESTINATION COVERED</p>
                    
                </div>
            

                <div className = {styles.info}>
                    <i className = "fa fa-handshake-o fa-3x"></i>
                    
                        <p className ={styles.numbers}>5+</p>
                        <p className = {styles.detail}>YEARS IN SERVICE</p>
                    
                </div>
            
                
        </div>
        </div>

    )
}
export default Record;