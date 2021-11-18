import Button from "@restart/ui/esm/Button";
import React from "react";

import { Component } from "react";
import { ListGroup, breakpoint, idx, Card } from "react-bootstrap";
import Square from "./square.component.js";
import {character} from "./square.component"

class Board extends Component{
    
    constructor(props){
        super(props);
        this.state={
            randomWord: "Click",
            charactersArray: ["bap"],
            filteredArray: ["temp"]
        };
    }

    words =["hello", "word", "testing", "purposer"]

    //generates a random word from the word list in state then splits it by character into an array
    //this array is called below to generate square objects
    randomWordGenerator = () => {
            this.setState({ randomWord:  this.words[Math.floor(Math.random() * this.words.length)],
                            charactersArray: this.state.randomWord.split(''),
                            filteredArray: this.state.charactersArray.filter(character => character.includes("r"))});
    };
    
    render(){
        return(
            <ListGroup horizontal>
                <ListGroup.Item className="mx-1 p-0 mt-1  border border-dark" variant="success">
                <Card style={{height: '5rem', width: '4rem'}} className="bg-success justify-content-center text-center border border-dark">
                    Logo
                </Card>
                </ListGroup.Item>  
                
                {this.state.randomWord}          
                
                <Button variant="outline-generate" size="lg" onClick={this.randomWordGenerator}>Generate</Button>               
                
                {this.state.charactersArray.map(() => <Square value={this.state.filteredArray}/>)}
                
                <ListGroup.Item className="mx-1 p-0 mt-1  border border-dark" variant="success">
                <Card style={{height: '5rem', width: '4rem'}} className="bg-success justify-content-center text-center border border-dark">
                    Logo
                </Card>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}
export default Board;


