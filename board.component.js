
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
            row_3: [""]

        };
    }
    phrases=["one for the road", "lets hit the road", "lets rock and roll"]

    //generates a random word from the word list in state then splits it by character into an array
    //this array is called below to generate square objects
    randomWordGenerator = () => {
            this.setState({ randomPhrase: this.phrases[Math.floor(Math.random() * this.phrases.length)],
                            wordArray: this.state.randomPhrase.split(" "),   
                            charactersArray: this.state.randomPhrase.split(''),
                            

                            row_1: this.state.charactersArray.slice(0, Math.ceil(this.state.charactersArray.length / 2)),
                            row_2: this.state.charactersArray.slice(Math.ceil(this.state.charactersArray.length / 2), this.state.charactersArray.length),
                         
                            
        });
        let r1len = 0;
        let r1 = [];
        let r2len = 0;
        let r2 = [];
        let r3len = 0;
        let r3 = [];
        let r1avail = true;
        let r2avail = true;
        let r3avail = true;
        let words = this.state.randomPhrase.split(" ");
        for(let i = 0; i < words.length; i++){
            
            if(r1len + words[i].length <= 12 && r1avail)
            {
                r1.push(words[i]);
                r1.push(" ");
                r1len += words[i].length+1;
                if(r1len + words[i].length > 12){
                    r1avail = false;
                }
            }
            else if(!r1avail && r2len + words[i].length <= 12 && r2avail)
            {
                r2.push(words[i]);
                r2.push(" ")
                r2len += words[i].length+1;
                if(r2len + words[i].length > 12){
                    r2avail = false;
                }
            }
            else if(!r2avail && r3len + words[i].length <= 12 && r3avail)
            {
                r3.push(words[i]);
                r3.push(" ");
                r3len += words[i].length + 1;
                if(r3len + words[i].length > 12){
                    r3avail = false;
                }
            }
        }
        for(let i = r1.length; i < 12; i++){
            r1.push(" ");
        }
        for(let i = r2.length; i < 12; i++){
            r2.push(" ");
        }
        for(let i = r3.length; i < 12; i++){
            r3.push(" ");
        }
        
        let r1char = [];
        let r2char = [];
        let r3char = [];
        for(let i = 0; i < r1.length; i++){
            r1[i].split("").forEach(l => { r1char.push(l);})
            // r1char.push(r1[i].split(''));
        }
        for(let i = 0; i < r2.length; i++){
            r2[i].split("").forEach(l =>  {r2char.push(l);})
        }
        for(let i = 0; i < r3.length; i++){
            r3[i].split("").forEach(l =>  { r3char.push(l);})
        }
        r1char.length = 12;
        r2char.length = 12;
        r3char.length = 12;
        this.setState({row_1: r1char, row_2: r2char, row_3: r3char})
};
   

    render(){
        return(
            <Col>
                <Row>
                    {this.state.row_1.map((letter, index) =>
                        <Col key={index}>
                            <Card style={{ height: '5rem', width: '4rem' }} className="bg-success justify-content-center text-center border border-dark">
                                <Card.Body>
                                    {letter}
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Row>
                    {this.state.row_2.map((letter, index) =>
                        <Col key={index}>
                            <Card style={{ height: '5rem', width: '4rem' }} className="bg-success justify-content-center text-center border border-dark">
                                <Card.Body>
                                    {letter}
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Row>
                    {this.state.row_3.map((letter, index) =>
                        <Col key={index}>
                            <Card style={{ height: '5rem', width: '4rem' }} className="bg-success justify-content-center text-center border border-dark">
                                <Card.Body>
                                    {letter}
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Row>
                    {this.state.charactersArray}
                    
                    <Button variant="outline-generate" size="lg" onClick={this.randomWordGenerator}>Generate</Button>
                </Row>
            </Col>

                  
        );
    }
}
export default Board;
