import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Landing from "../../Components/Landing/Landing";
import Quote from "../../Components/Quote/Quote";
import Client from "../../Components/Client/Client";
import LANDING_IMG from '../../assets/Home/landing.jpg';
import LOGO from "../../assets/Header/logo.png";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer";
import Work from "../../Components/Work/Work";
import CallUs from "../../Components/CallUs/CallUs";



const Home =(props)=>{
    return (<div>
        <Header src = {LOGO}/>
         <Navbar/>
        
        <Landing src={LANDING_IMG}/>
        <CallUs/>
        <Quote line = "Leave it on Blue Waves to make any event truly memorable"/> 
        <Client/>
        <Work/>
       <Footer/>
    </div>)
}
export default Home;

