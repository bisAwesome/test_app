import React from 'react';
import { SecondNavBar} from './components/SecondNavBar';
import { Container } from 'react-bootstrap';
import Pokedex from './components/Pokedex';
import Rando from './components/Rando';
import Game from './components/Game';
import Button from './components/Button';

export const Management = () => (
<React.Fragment>
    
<SecondNavBar />
<Container >

    <div>
        <h2>This is the App Management page page.</h2>
        <p>This text is for testing purposes only.</p>
        <div>
            <Rando maxNum={7}/>
            <Game />
            <Button />
        </div>
        <Pokedex />        
    </div>
    </Container>
 </React.Fragment>           
    )