import React from "react";
import styles from "./TeamDetails.module.css";
import ONE from "../../assets/Team/one-team.png";
import TWO from "../../assets/Team/two-team.png";
import THREE from "../../assets/Team/three-team.png";
const TeamDetails = props =>{
    return (
        <div className = {styles.main}>
            <div className = {styles.one}>
                <div className = {styles.oneImg}>
                <img src = {ONE}/>
                </div>
                <div className = {styles.text}>
                She is the energy centre that artistically 
                manages the creative workload of the company, 
                ensuring that excellent results are 
                achieved with detailed <span className = {styles.para}>precision</span>.
                </div>
                
                </div>
             
                
                <div className = {styles.two}>
                <div className = {styles.twoImg}>
                <img src = {TWO}/>
                </div>
                <div className = {styles.text}>
                He is the power source of this successful organization,
                with unparalleled experience of more than 15 years 
                and extremely high standards of work ethics and <span className = {styles.para}>professionalism</span>.
                </div>
                </div>

                <div className = {styles.three}>
                <div className = {styles.threeImg}>
                <img src = {THREE}/>
                </div>
                <div>
                She is the enthusiastic driving force
                that efficiently maintains all logistics of the company, 
                making sure everyone does their work as per 
                her high expectations of <span className = {styles.para}>perfection</span>.
                </div>
                </div>
        
        </div>
    )
}
export default TeamDetails;