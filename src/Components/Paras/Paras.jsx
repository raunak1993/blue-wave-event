import React from "react";
import styles from "./Paras.module.css";
class Paras extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        paras:[
            ["2015 october","Reward and Recognition Event for IndusInd Bank in Panchwati"],
            ["2016 January","Company Stall Fair and Branding for ERECA at St. Paul’s Cathedral"],
            ["2016 February","Destination Meeting and Formal Dinner Gala with Reward and Recognition for HDFC Life in Shankarpur"],
            ["2016 April","Reward and Recognition Event for Tata AIA at Park Plaza"],
            ["2016 May","Destination Meeting and Formal Dinner Gala Reward and Recognition Event for HDFC Life in Panchwati"],
            ["2016 June","Destination Meeting and Formal Dinner Gala with Reward and Recognition Event for HDFC Life in Lataguri"],
            ["2016 July","Destination Meeting and Formal Dinner Gala with Reward and Recognition Event for HDFC Life in Puri"],
            ["2016 August","Reward and Recognition Event for HDFC Life in Mangalam Banquet"],
            ["2016 October","Reward and Recognition Event for IndusInd Bank at ITC Fortune Park"],

["2016 December","Wedding for Mr. Agarwal in Eco Park"],

["2017 January","Reward and Recognition Event for HDFC Bank in Nicco Park"],

["2017 February","1st Birthday Party for Ms. Poddar in HHI"],

["2017 February","Wedding for Mr. Sethia in South City Banquets"],

["2017 March","Reward and Recognition Event for HDFC Life at Lake Land Country Club"],

["2017 April","Reward and Recognition Event for HDFC Bank in Nicco Park"],

["2017 June","25th Anniversary for Mr. Das Party at Park Plaza"],

["2017 July","Destination Meeting and Formal Dinner Gala with Reward and Recognition Event in Agra"],

["2017 November","Wedding for Mr. Jain in Mewar Banquets"],

["2018 January","Formal Dinner Gala and Reward and Recognition Event for HDFC Bank in Vedic Village"],
["2018 June","Yoga Day Celebration for HDFC Bank in Multiple Corporate Offices"],

["2018 July","Football Mania for Genpact"],

["2018 July","Employee Recognition Event – Mini Sparsh – for HDFC Life in Conclave"],

["2018 July","Reward and Recognition Event for HDFC Bank in Park Hotel"],

["2018 July","Destination Meeting and Formal Dinner Gala Reward and Recognition Event for HDFC Life in Panchwati"],

["2018 August","Independence Day Celebration for HDFC Bank in Multiple Societies and Clubs"],

["2018 September",

"Teacher’s Day Celebration for HDFC Bank in Multiple Schools and Colleges"],

["2018 September","Promotional Activities in Malls for Samsonite in East India"],

["2018 October","Swachchata Hi Seva done for HDFC Bank in Multiple Ward Areas"],

["2018 October","Durga Puja Branch Decoration for HDFC Bank in all Branches"],

["2018 October","Housewarming Party for Mr. Aliani"],

["2018 October","Mall Promotional Activity for HDFC Bank for PAYZAPP Application in Diamond Plaza and South City Mall"],

["2018 November","Mall Promotional Activity for HDFC Bank for PAYZAPP Application in Diamond Plaza and South City Mall"],

["2018 November","ICSE Board Principals’ Meet at Aquatica"],

["2018 December","Destination Wedding for Mr. Khemani in Lake Land Country Club"]
        ]    
        }
    }






render(){
    return (
        <>
        {this.state.paras.map(item =>{
            return (<div key = {item} className = {styles.container}><div className = {styles.date}>{item[0]}</div><div className = {styles.details}>{item[1]}</div></div>)
        })}
        </>
    )
}
}
export default Paras;