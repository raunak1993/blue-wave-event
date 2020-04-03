import React from "react";
import LOGO from "../../assets/Header/logo.png";
import LANDING from "../../assets/Team/landing2.png";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Landing from "../../Components/Landing/Landing";
import Quote from "../../Components/Quote/Quote";
import OurTeam from "../../Components/OurTeam/OurTeam";
const Team = (props) =>{
    return (<><Header src = {LOGO}/>
    <Navbar/>
    <Landing src = {LANDING}/>
    <Quote line = "None of us is as good enough as All of us"/>
    <OurTeam text = "Like our Core Team, we strive to achieve precision of plan executed with professionalism and perfection."/>

    </>)
}
export default Team;