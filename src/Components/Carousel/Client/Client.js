import React from "react";
import Carousel from "../Carousel/Carousel";
import HorizontalDivider from "../horizontalDivider/HorizontalDivider";
import Divider from "../Divider/Divider.js"
import "./Client.css";
import MediaQuery from "react-responsive";
import styled from "styled-components";
class Client extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size:888
        };
        this.size= 0
    }
    changeSize(){
        this.setState({size:500},()=>{return alert(this.state.size)})
    }
    //Button = styled.button`
    //@media only screen and (min-width:700px){
      //  background-color:violet;
       // ${this.changeSize()};
    //}`
    // changeSize = (props)=>{
    //     return (<><MediaQuery query = "(min-width:500px)">
    //     {/* <div>media query</div> */}
    //     {/* {this.size = 500} */}
    //     {this.setState({size:600})}
        
    // </MediaQuery>
    // <div>{this.state.size}</div></>)

    //     }
    render(){
        return (<div className = "main">
            {/* <this.Button>hi</this.Button> */}
            
    <div className = "client">Our clients</div>
    <HorizontalDivider/>
    <p className = "client-para">SOME OF THE COMPANIES THAT EXPERIENCED OUR EVENT</p>
        {this.state.size}
        <div className = "main">
        <Carousel className = "classname1" size = {2}/>
        <Carousel className = "classname2" size = {3}/>
        <Carousel className = "classname3" size = {5}/>
        <HorizontalDivider/>
        <Divider/>
        </div>

        
    </div>)
    }
}
export default Client;