import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import axios from 'axios';



class Store extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            cName: '',
            cEmail: '',
            cCard: '',
            cCase: '',
            cDate: '',
            merchant: '',
            amount: '',
            caseType: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
 
        this.setState({ [e.target.name]: e.target.value });

    }

    async handleSubmit(e) {
        e.preventDefault()

        const { cName, cEmail, cCard, cCase, cDate, merchant, amount, caseType } = this.state

        const form = await axios.post('/api/form', { 
            cName, 
            cEmail, 
            cCard, 
            cCase, 
            cDate, 
            merchant, 
            amount, 
            caseType
        })
    }

    render() {
        return (


                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="cName">Customer's name</Label>
                            <Input 
                                type="text"
                                name="cName" 
                                onChange={this.handleChange} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cEmail">Email</Label>
                            <Input 
                                type="email" 
                                name="cEmail"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cCard">Credit Card Number</Label>
                            <Input 
                                type="number" 
                                name="cCard" 
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <Row form>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="cCase">Case ID</Label>
                                    <Input 
                                        type="text"
                                        name="cCase" 
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="cDate">Date</Label>
                                    <Input 
                                        type="date" 
                                        name="cDate"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="merchant">Name of Merchant</Label>
                                    <Input 
                                        type="text" 
                                        name="merchant"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                            <FormGroup>
                                <Label for="amount">Amount</Label>
                                <InputGroup>                    
                                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                    <Input 
                                        type="number" 
                                        name="amount"
                                        onChange={this.handleChange}
                                    />
                                </InputGroup>
                            </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="caseType">Case type</Label>
                            <Input 
                                type="select" 
                                name="caseType"
                                onChange={this.handleChange}
                            >
                            <option>C1 - Missing Info for Good & Services not received</option>
                            <option>C2 - Missing Info for Goods or Services cancelled</option>
                            <option>C3 - Missing Info for Not as Describe or Defective</option>
                            <option>C4 - Missing Info for Counterfeit Product</option>
                            <option>C5 - Missing Info for Quality Of Service</option>
                            <option>C6 - Missing Info for Incorrect Charge</option>
                            <option>C7 - Missing Info for Paid by Other Means</option>
                            <option>C8 - Missing Info for Recurring Transactions</option>
                            <option>C9 - Missing Info for Trading or Binary Merchants</option>
                            <option>C10 - Follow Up Any Missing Info</option>
                            </Input>
                        </FormGroup>
                        
                        <Button>Submit</Button>
                    </Form>

        );
        }
}



    export default Store;