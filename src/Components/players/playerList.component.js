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

    render(){
        return(
            <ListGroup>
                {this.state.players.map((player, index) => <PlayerComponent player={player} color={(index+1)%3 == 0 ? "blue" : (index+1)%3 == 1 ? "yellow" : "red"} key={index}/> )}
              
            </ListGroup>
        );
    }
}
export default PlayerList;

