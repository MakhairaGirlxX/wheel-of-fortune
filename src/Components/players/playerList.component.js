import React from "react";
// import { ListGroup } from "react-bootstrap";
// import PlayerComponent from "./player.component";

import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import PlayerComponent from "./player.component";

// //Shows list of player detail cards sorted by player turn

class PlayerList extends Component{
    
    constructor(props){
        super(props);
        this.state={
            players: this.props.players
        };
    }
    // Updates component render on external change to props
    static getDerivedStateFromProps(newProps, state) {
        if(newProps.players !== state.players){
            return {
                players: newProps.players
            }
        }
        return null;
    }
    
    renderPlayer(i){
        return <PlayerComponent player={this.state.players[i]} />
    }
    
    render(){
        return(
            <ListGroup>
                {this.renderPlayer(0)}
                {this.renderPlayer(1)}
                {this.renderPlayer(2)}
                {this.renderPlayer(3)}
            </ListGroup>
        );
    }
}
export default PlayerList;

