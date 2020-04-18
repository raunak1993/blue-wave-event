import React from "react";
import firebase from 'firebase'
import styles from "./Form.module.css";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formData:{
                name:'',
                contact:'',
                email:'',
                message:''



            }
        }
    }
    
    setValues = (e) =>{
        e.preventDefault()
        if(this.state.formData.contact === "" || this.state.formData.email === "" ||this.state.formData.message === "" || this.state.formData.name === ""){
            alert("please fill all the fields")
        }
        else{
            const{name,contact,email,message}=this.state.formData


       firebase.firestore().collection('users').doc(email).set({
           name,
           contact,
           email,
           message
       }).then(console.log('saved successfully'))
        }
        
    }

    handleChange=(e)=>{
        let newValues = this.state.formData;
        newValues[e.target.id] = e.target.value;
    this.setState({formData:newValues},console.log(this.state.formData))

    
    
        
    }


    render(){
        return (
            <>
            <p className = {styles.tingtong}>Ting Tong!</p>
            
            <form className={styles.contact_form} onSubmit = {(e)=>this.setValues(e)}>
                <div className ={styles.container}>
                    <div className = {styles.inputfield}>
                        <p className={styles.input_title}>Name 
                        <span className = {styles.star}>*</span>
                        </p>
                        <input value={this.state.name}  className={styles.input_field} placeholder= "Name"  id = "name" onChange = {(e)=>this.handleChange(e)}/>
                    </div>


                    <div className = {styles.inputfield2}>
                    <p className={styles.input_title}>
                        Contact 
                        <span className = {styles.star}>*</span>
                        </p>
                        <input value={this.state.contact} className={styles.input_field} type = "number" placeholder= "Contact" id = "contact" onChange = {(e)=>this.handleChange(e)}/>
                    </div>


                    <div className = {styles.inputfield3}>
                        <p className={styles.input_title}>Email 
                        <span className = {styles.star}>*</span>
                        </p>
                        <input value = {this.state.email} className={styles.input_field} type = "email" placeholder= "Email" id = "email" onChange = {(e)=>this.handleChange(e)}/>
                    </div>


                    <div className = {styles.inputfield}>
                        <p className={styles.input_title}>Message 
                        <span className = {styles.star}>*</span>
                        </p>
                        <textarea value = {this.state.message} className={styles.input_field} placeholder= "Message" id = "message" onChange = {(e)=>this.handleChange(e)}/>
                    </div>
                    
                </div>
                <button className = {styles.submit}><i className = "fa fa-angellist"></i> Send</button>
    
                
    
            </form>
            </>
        )

    }




}
export default Form;