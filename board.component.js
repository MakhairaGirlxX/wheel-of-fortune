import Button from "@restart/ui/esm/Button";
import React from "react";

import { Component } from "react";
import { ListGroup, breakpoint, idx, Card, Container, Row, Col, ListGroupItem } from "react-bootstrap";
import Square from "./square.component.js";

class Board extends Component{
    
    constructor(props){
        super(props);
        this.state={
            randomPhrase: "",
            wordArray: [""],
            charactersArray: [""],
            guess: "t",
            row_1: [""],
            row_2: [""],

        };
    }
    phrases=["one for the road", "lets hit the road", "lets rock and roll"]

    //generates a random word from the word list in state then splits it by character into an array
    //this array is called below to generate square objects
    randomWordGenerator = () => {
            this.setState({ randomPhrase: this.phrases[Math.floor(Math.random() * this.phrases.length)],
                            wordArray: this.state.randomPhrase.split(' '),   
                            charactersArray: this.state.randomPhrase.split(''),              

                            row_1: this.state.charactersArray.slice(0, Math.ceil(this.state.charactersArray.length / 2)),
                            row_2: this.state.charactersArray.slice(Math.ceil(this.state.charactersArray.length / 2), this.state.charactersArray.length),
                         
                            
    })};
   

    render(){
        return(
                 
            <ListGroup vertical className="align-items-stretch g-0 p-0">           
                
                <Row>
                <Col> 
                <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="align-items-center bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item> 
                </Col>
                <Col> 
                <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="align-items-center bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item> 
                </Col>
                <Col> 
                <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="align-items-center bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item> 
                </Col>
                <Col>
                <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item> 
                </Col>

                <Col> 
                {this.state.row_1.map((character) => character === " " ? 
                <Card style={{ height: '5rem', width: '4rem' }} className="mt-1 bg-success justify-content-center text-center border border-dark">
                 Logo
                 </Card>:                   
                <Square value={character === this.state.guess ? character : character = " "}/>)}
                </Col>

                <Col> 
                <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="align-items-center bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item> 
                </Col>
                <Col> 
                <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="align-items-center bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item> 
                </Col>
                </Row>

                <Row> 
                <Col> 
                <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="align-items-center bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item> 
                </Col>
                <Col>
                <ListGroup.Item className="mx-1 p-0 mt-1  text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item>
                </Col>
                
                <Col> 
                <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="success">
                    <Card style={{ height: '5rem', width: '4rem' }} className="bg-success justify-content-center text-center border border-dark">
                        Logo
                    </Card>
                </ListGroup.Item>              
                </Col>

                <Col> {this.state.row_2.map(character => character === " " ? 
                <Card style={{ height: '5rem', width: '4rem' }} className="mt-1 bg-success justify-content-center text-center border border-dark">
                 Logo
                 </Card>:                   
                <Square value={character === this.state.guess ? character : character = " "}/>)} </Col>
                </Row>
                
                {this.state.charactersArray}
                    
                <Button variant="outline-generate" size="lg" onClick={this.randomWordGenerator}>Generate</Button>
          
                </ListGroup>

                  
        );
    }
}
export default Board;
