import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { render } from "react-dom";

class PlayerComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            player: props.player,
            color: props.color
        };
    }
    // Updates component on external change to properties
    static getDerivedStateFromProps(newProps, state) {
        if(newProps.player !== state.player){
            return{
                player: newProps.player
            }
        }
        return null;
    }
    
    render(){
        const playerStyle ={
            "border-color": this.state.color,
            "border-style": "solid",
            "border-width": "thick",
            color: "black",
            backgroundColor: "silver"
            
        }
        return(
            <ListGroup.Item className="m-0 mt-1 p-0 border rounded border-dark">
                <Card className="rounded justify-content-center text-center">
                    <Card.Title className="py-1 my-0 " style={playerStyle}>{this.state.player.playername}</Card.Title>
                    <Card.Body className="bg-secondary text-light bold pt-1 pb-1">${this.state.player.funds}</Card.Body>
                </Card>
            </ListGroup.Item>
        )
    }
}

export default PlayerComponent;