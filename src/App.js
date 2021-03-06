import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import Store from './Store';
import { Management } from './Management';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Pokecard from './components/Pokecard';

//import anzlogo from './ANZlogo.svg';
import './App.css';
import { Container } from 'react-bootstrap';


//import Anzlogo from './components/logo.js';

function App() {

  return (
    <React.Fragment>
      <NavigationBar 
        title = "Disputes letters" 

        menuItems = {[
          { name: "App Store", link: "/store" },
          { name: "App Management", link: "/management" },
          { name: "App Shmoking3", link: "/shmoking3" }

      ]}

      />      
        <Layout>
         <Router>
           <Switch>
             <Route exact path="/" component={Store} />
             <Route exact path="/store" component={Store} />
             <Route exact path="/management" component={Management} />
             <Route exact component={NoMatch} />
           </Switch>
         </Router>

        </Layout>  
    </React.Fragment>
    
    
  );
}

export default App;
