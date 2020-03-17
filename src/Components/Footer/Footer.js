import React from "react";
import styles from "./footer.module.css";
const Footer = (props) =>{
    return (
    
    
    <div className = {styles.container}>
        
        <div className = {styles.content}>
    


        <div className={styles.contact_details}>

                        <div className = {styles.phone}>
                            <p className = {styles.underline}>
                                Call Us
                            </p>
                            <p>94330 69641</p>
                            <p>98319 26634</p>
                            <p>98308 91315</p>
                            </div>

                            <div className = {styles.address}>
                                <p className = {styles.underline}>Address​</p>
                    <p>10/13, Charu Avenue,<br/>
                    Kolkata 700033</p>

                            </div>

                            <div className = {styles.email}>

        <p className = {styles.underline}>Email Us</p>
bluewaves.bw15@gmail.com
        </div>
        </div>

        <div className={styles.copyright}><p>Copyright © 2020 Blue Waves</p></div>
        
        </div>
    
    </div>

   
)
}
export default Footer;
