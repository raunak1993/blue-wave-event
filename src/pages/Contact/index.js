import React from "react";
import Header from "../../Components/Header/Header";
import LOGO from "../../assets/Header/logo.png";
import LANDING_IMG from '../../assets/Contact/landing.png';
import Navbar from "../../Components/Navbar/Navbar";
import Landing from "../../Components/Landing/Landing";
import Form from "../../Components/Form/Form";

const Contact = (props) =>{
    return (<div>
        <Header src = {LOGO}/>
        <Navbar/>
        <Landing src = {LANDING_IMG}/>
        <Form/>


    </div>)
}
export default Contact;