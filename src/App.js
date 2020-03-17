import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home/index";
import Contact from "./pages/Contact/index";
import Portfolio from "./pages/Portfolio/index";
import Team from "./pages/Team/index";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navActive:true,
    }
  }



  render(){
    return (
      <Router>
        <div className="App">
       <Switch>


       <Route path = "/" exact>
  
          <Home/>
        
          </Route>
          
         
         <Route path = "/team">
           <Team/>
           
           </Route>

        

           <Route path = "/portfolio">
          <Portfolio/>
        </Route>

        <Route path = "/contact" exact>
          
          <Contact/>
        </Route>

        

      </Switch>
      </div>
      </Router>
      
    );
  }
  
}

export default App;
