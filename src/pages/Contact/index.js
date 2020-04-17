import React from "react";
import Header from "../../Components/Header/Header";
import LOGO from "../../assets/Header/logo.png";
import LANDING_IMG from '../../assets/Contact/landing.png';
import Navbar from "../../Components/Navbar/Navbar";
import Landing from "../../Components/Landing/Landing";
import Form from "../../Components/Form/Form";
import Footer from "../../Components/Footer/Footer";
import CallUs from "../../Components/CallUs/CallUs";

const Contact = (props) =>{
    return (<div>
        <Header src = {LOGO}/>
        <Navbar/>
        <Landing src = {LANDING_IMG}/>
        <CallUs/>
        <Form/>
        <Footer/>


    </div>)
}
export default Contact;