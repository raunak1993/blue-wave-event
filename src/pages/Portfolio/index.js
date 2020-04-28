import React from "react";
import Header from "../../Components/Header/Header";
import LOGO from "../../assets/Header/logo.png";
import Navbar from "../../Components/Navbar/Navbar";
import Landing from "../../Components/Landing/Landing";
import LANDING_IMG from "../../assets/Portfolio/portfolio.png";
import Quote from "../../Components/Quote/Quote";
import Divider from "../../Components/Divider/Divider";
import Title1 from "../../Components/Title1/Title1.js";
import Paras from "../../Components/Paras/Paras";
const Portfolio = (props) =>{
    return (<>
        <Header src = {LOGO}/>
        <Navbar/>
        <Landing src = {LANDING_IMG}/>
        <Quote text = "We don't just organize events we fill emotions in them."/>
        <Divider/>
        <Title1 text= "Our Special Events"/>
        <Divider/> 
        <Paras/>   
        </>)
}
export default Portfolio;