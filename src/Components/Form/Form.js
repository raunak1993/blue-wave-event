import React from "react";
import styles from "./Form.module.css";
const Form = props =>{
    return (
        <>
        <p className = {styles.tingtong}>Ting Tong!</p>
        
        <form className={styles.contact_form}>
            <div className ={styles.container}>
                <div className = {styles.inputfield}><p>Name <span className = {styles.star}>*</span></p><input className={styles.input_field} required placeholder= "Name"/></div>
                <div className = {styles.inputfield2}><p>Contact <span className = {styles.star}>*</span></p><input className={styles.input_field} type = "number" required placeholder= "Contact"/></div>
                <div className = {styles.inputfield3}><p>Email <span className = {styles.star}>*</span></p><input className={styles.input_field} type = "email" placeholder= "Email" required/></div>
                <div className = {styles.inputfield}><p>Message <span className = {styles.star}>*</span></p><textarea className={styles.input_field} required placeholder= "Message"/></div>
                
            </div>
            <button className = {styles.submit}><i className = "fa fa-angellist"></i> Send</button>

            

        </form>
        </>
    )
}
export default Form;