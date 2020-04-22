import React from 'react';
import { Container } from 'reactstrap';





export const Layout = (props) => (

<div>
    <Container>
        <br></br>
        <br></br>
        {props.children}
        <br></br>
        <br></br>
    </Container>
</div>
)