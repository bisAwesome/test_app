import React, { Component } from 'react';
import styled from 'styled-components';

//const title = {this.props.title};


const Styles = styled.div`
       
    max-width: 1268px;
    width: 100%;
    margin-bottom: 12px;
    padding-top: 40px;
    padding-bottom: 28px;
    padding-left: 12px;
    padding-right: 12px;
    position: relative;
    background-color: #004165;

    color: #e2eff4;
    font-family: myriad-pro,Arial,sans-serif;
    font-weight:normal;
    font-size: 20px;

`;


class MainNavItem extends Component{
    render() {
        console.log(this.props.title);
        return(
        <Styles>
            <div>
                
            {this.props.title  || "No title"}
                
            </div>
        </Styles>
        )
    }
    

};


export default MainNavItem;