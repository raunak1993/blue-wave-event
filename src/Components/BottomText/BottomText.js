import React from "react";
import styles from "./BottomText.module.css";
import Divider from "../Divider/Divider";
const BottomText = props =>{
return (<div className = {styles.container}>
<Divider/>
<div className = {styles.title}>Our Awesome team</div>
<div className = {styles.first_para}>
EMCEES, DJs & ENTERTAINERS, LIGHT & SOUND ENGINEERS, PRODUCTION & PROPS TEAM, PHOTOGRAPHERS, COORDINATORS, GRAPHIC
DESIGNERS & PRINTERS, MEDIA & PR PARTNERS, LOGISTICS, SPONSERS, DECORATORS, FLORISTS, CATERERS, CONFECTIONERS, BANQUETS & 
HOTELIERS, RESTAURATEURS…


</div>

<div className = {styles.second_para}>
They are the pillars of support and strength on which the company is built on. All of them are not only good colleagues but also close friends who take their jobs very seriously.
</div>


</div>)
}
export default BottomText;