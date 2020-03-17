import React from "react";
import Carousal from "../Carousal/Carousal";
import HorizontalDivider from "../horizontalDivider/HorizontalDivider";
import Divider from "../Divider/Divider.js"
import "./Client.css";
import MediaQuery from "react-responsive";
class Client extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size:0
        };
        this.size= 0
    }
    render(){
        return (<div className = "main">
            <MediaQuery query = "(min-width:500px)">
                {/* <div>media query</div> */}
                {/* {this.size = 500} */}
                {this.size}
            </MediaQuery>
        
    <div className = "client">Our clients</div>
    <HorizontalDivider/>
    <p className = "client-para">SOME OF THE COMPANIES THAT EXPERIENCED OUR EVENT</p>

        <div className = "main">
        <Carousal size = {this.size}/>
        <HorizontalDivider/>
        <Divider/>
        </div>

        
    </div>)
    }
}
export default Client;