import React from "react";
import styles from "./Navbar.module.css";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
class Navbar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }
    openClose = ()=>{
        this.setState({isOpen:!this.state.isOpen})
    }

    render(){

        return (<div className = {styles.hidden}>
            <div className = {styles.mobile}>
                    
                    {this.state.isOpen?
                        <div className={styles.nav}>
                            <div className = {styles.menu} onClick = {()=>this.openClose()}>X</div>
                            <Link to = "/" className={styles.link}>Home</Link>
                            <Link to = "/team" className={styles.link}>Team</Link>
                            <Link to = "/portfolio" className={styles.link}>Portfolio</Link>
                            <Link to = "/contact" className={styles.link}>Contact</Link>
    
        
    </div>:<div className = {styles.menu} onClick = {()=>this.openClose()}><i className="fa fa-bars"></i>

</div>
        }

        </div>
        <div className = {styles.desktop}>
        <Link to = "/" className={styles.link}>HOME</Link>
        <Link to = "/team" className={styles.link}>TEAM</Link>
        <Link to = "/portfolio" className={styles.link}>PORTFOLIO</Link>
        <Link to = "/contact" className={styles.link}>CONTACT</Link>
        </div>
        
        
        
        
        
        
    </div>
    )
    }
    
}
export default Navbar;