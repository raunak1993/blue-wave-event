import React from "react";
import styles from "./Form.module.css";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formData:{
                name:null,
                contact:null,
                email:null,
                message:null



            }
        }
    }
    
    setValues = (e) =>{
        e.preventDefault();
        this.setState({formData:{name:e.target[0].value,contact:e.target[1].value,email:e.target[2].value,message:e.target[3].value}},()=>console.log(this.state.formData));
        
        
    }
    render(){
        return (
            <>
            <p className = {styles.tingtong}>Ting Tong!</p>
            
            <form className={styles.contact_form} onSubmit = {(e)=>this.setValues(e)}>
                <div className ={styles.container}>
                    <div className = {styles.inputfield}><p className={styles.input_title}>Name <span className = {styles.star}>*</span></p><input className={styles.input_field} required placeholder= "Name"/></div>
                    <div className = {styles.inputfield2}><p className={styles.input_title}>Contact <span className = {styles.star}>*</span></p><input className={styles.input_field} type = "number" required placeholder= "Contact"/></div>
                    <div className = {styles.inputfield3}><p className={styles.input_title}>Email <span className = {styles.star}>*</span></p><input className={styles.input_field} type = "email" placeholder= "Email" required/></div>
                    <div className = {styles.inputfield}><p className={styles.input_title}>Message <span className = {styles.star}>*</span></p><textarea className={styles.input_field} required placeholder= "Message"/></div>
                    
                </div>
                <button className = {styles.submit}><i className = "fa fa-angellist"></i> Send</button>
    
                
    
            </form>
            </>
        )

    }




}
export default Form;