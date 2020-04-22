import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Store } from './Store';
import { Management } from './Management';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import Panel from './components/Panel';
import MainNavItem from './components/MainNavItem';

//import anzlogo from './ANZlogo.svg';
import './App.css';
import { Container } from 'react-bootstrap';


//import Anzlogo from './components/logo.js';

function App() {
  console.log(
    '!!!'
  );
  return (
    <React.Fragment>
      <NavigationBar />      
        <Layout>
         <Router>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/store" component={Store} />
             <Route exact path="/management" component={Management} />
             <Route exact component={NoMatch} />
           </Switch>
         </Router>
          <div className="App">
            <header className="App-header">
              <Container>
                <Panel title="General info"/>
                <Panel title="Application details"/>
                <Panel title=""/>
                <MainNavItem title=""/>
                </Container>
            </header>
          </div>
        </Layout>  
    </React.Fragment>
    
    
  );
}

export default App;
