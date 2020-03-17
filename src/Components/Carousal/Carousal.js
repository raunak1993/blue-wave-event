import React from "react";
import IMG1 from "../../assets/Home/hdfc-bank.png";
import IMG2 from "../../assets/Home/indusind.png";
import IMG3 from "../../assets/Home/samsonite.png";
import IMG4 from "../../assets/Home/tata-aia.png";
import IMG5 from "../../assets/Home/hdfc-ergo.png";
import IMG6 from "../../assets/Home/zee.png";
import IMG7 from "../../assets/Home/hdfc-life.png";
import styles from "./Carousal.module.css";
class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images : [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7],
            currentImage :[],
            size: 0
        }
        this.num = 0;
    }
    interval(){setInterval(
        ()=>this.changeImage(this.num,this.num+1,this.num+2,this.num+3,this.num+4)
        , 2000);
    }
    changeImage(num1,num2,num3,num4,num5){
        
        console.log(num1,num2,num3,num4,num5);

        this.setState({currentImage:[this.state.images[num1],this.state.images[num2],this.state.images[num3],this.state.images[num4],this.state.images[num5]]},()=>console.log(this.state.currentImage))
        
        this.num++;
        if(num5===6){
            this.num=0;
        }
        
    }


    componentDidMount(){
        this.interval();
        
    }
    render(){
        return (<div className = {styles.main}>
            
            <div className= {styles.carousal}>
                {/* <img src = {this.state.currentImage[0]} alt = "1"/>
                <img src = {this.state.currentImage[1]} alt = "2"/>
                <img src = {this.state.currentImage[0]} alt = "1"/>
                <img src = {this.state.currentImage[1]} alt = "2"/> */}
                { this.state.currentImage.map(item =>{
                    return (<div className={styles.image}><img src = {item} alt = "img"/></div>)
                })}
            
        
        
            </div>
                    
            </div>)
    }
}
            
export default Carousel;