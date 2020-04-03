import React from "react";
import IMG1 from "../../assets/Home/hdfc-bank.png";
import IMG2 from "../../assets/Home/indusind.png";
import IMG3 from "../../assets/Home/samsonite.png";
import IMG4 from "../../assets/Home/tata-aia.png";
import IMG5 from "../../assets/Home/hdfc-ergo.png";
import IMG6 from "../../assets/Home/zee.png";
import IMG7 from "../../assets/Home/hdfc-life.png";
import styles from "./Carousel.module.css";
import cx from "classnames";
class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images : [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7],
            currentImage :[],
            size: 0,
            numbers : [0,1,2,3,4]
        }
        this.num = 0;
    }
    interval(){setInterval(
        ()=>this.changeImage(this.state.numbers)
        , 2000);
    }
    changeImage(numbers){
        
        
        console.log(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]);
        // if(this.props === '2'){
        
        this.setState({currentImage:[this.state.images[numbers[0]],this.state.images[numbers[1]],this.state.images[numbers[2]],this.state.images[numbers[3]],this.state.images[numbers[4]]]},()=>console.log(this.state.currentImage))
        
        this.num++;
        const fromZero = [0,1,2,3,4];
        if(numbers[4]===6){
            this.num=0;
            this.setState({numbers:fromZero});
        }
        const newNumbers=this.state.numbers.map(item =>{
         return item+1;
        })
        this.setState({numbers:newNumbers})
        console.log(newNumbers);
        
        
    }
    
    
    
        
    
    // setWindow = ()=>{
    //     if(window.innerWidth>500){
    //         this.setState({size:500});
    //     }
    //     else{
    //         this.setState({size:0})
    //     }
    //     return this.state.size;
    // }
    
    // showValue = ()=>{
        
    // }

    componentDidMount(){
        this.interval();
        
        
    }
    

    render(){
        return (<div className = {styles.main}>
            {/*this size is {this.props.size}
            {window.addEventListener("resize",()=>this.setWindow(this.showValue))}*/}
            <div className = {cx(styles.carousel,styles[this.props.className])}>
                {/*</div><div className = {this.props.className1}>*/}
                { this.state.currentImage.map(item =>{
                    return (<div className={styles.image}><img src = {item} alt = "img"/></div>)
                })}
                
            
        
        
            </div>
                    
            </div>)
    }
}
            
export default Carousel;