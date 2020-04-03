import React from "react";
import styles from "./OurTeam.module.css";
import TeamDetails from "../../Components/TeamDetails/TeamDetails";
const OurTeam = props =>{
    return (
        <div className = {styles.main}>
        <div className = {styles.heading}>Our Team</div>
    <div className = {styles.para}>{props.text}</div>
    <TeamDetails/>
        </div>
    )
}
export default OurTeam;