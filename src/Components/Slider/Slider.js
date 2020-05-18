import React from "react";
// import Client from "../../Components/Client/Client";
import Client1 from "../Client1/Client1";
import Title1 from '../Title1/Title1'
import Divider from '../Divider/Divider'

import IMG1_1 from "../../assets/Portfolio/portfolio1/portfolio_1_1.png";
import IMG1_2 from "../../assets/Portfolio/portfolio1/portfolio_1_2.png";
import IMG1_3 from "../../assets/Portfolio/portfolio1/portfolio_1_3.png";
import IMG1_4 from "../../assets/Portfolio/portfolio1/portfolio_1_4.png";
import IMG1_5 from "../../assets/Portfolio/portfolio1/portfolio_1_5.png";

import IMG2_1 from "../../assets/Portfolio/portfolio2/portfolio_2_1.png";
import IMG2_2 from "../../assets/Portfolio/portfolio2/portfolio_2_2.png";
import IMG2_3 from "../../assets/Portfolio/portfolio2/portfolio_2_3.png";
import IMG2_4 from "../../assets/Portfolio/portfolio2/portfolio_2_4.png";
import IMG2_5 from "../../assets/Portfolio/portfolio2/portfolio_2_5.png";

import IMG3_1 from "../../assets/Portfolio/portfolio3/portfolio_3_1.png";
import IMG3_2 from "../../assets/Portfolio/portfolio3/portfolio_3_2.png";
import IMG3_3 from "../../assets/Portfolio/portfolio3/portfolio_3_3.png";
import IMG3_4 from "../../assets/Portfolio/portfolio3/portfolio_3_4.png";
import IMG3_5 from "../../assets/Portfolio/portfolio3/portfolio_3_5.png";

const Slider = (props) =>{
    const  arr1 = [IMG1_1,IMG1_2,IMG1_3,IMG1_4,IMG1_5]
    const arr2= [IMG2_1,IMG2_2,IMG2_3,IMG2_4,IMG2_5]
    const arr3 = [IMG3_1,IMG3_2,IMG3_3,IMG3_4,IMG3_5]
    return (<>
        <Divider/>
        <Title1 text = "Independence Day Celebration"/>
        <Client1 image = {arr1} text = "jkj"/>
        <Divider/>
        <Title1 text = "Teachers Day Celebration"/>
        <Client1 image = {arr2} text = "jkj"/>
        <Divider/>
        <Title1 text = "Ereca Fair And Meet"/>
        <Client1 image = {arr3} text = "jkj"/>
    </>)
}
export default Slider;