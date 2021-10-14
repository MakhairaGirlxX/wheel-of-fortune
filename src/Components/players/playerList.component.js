import React from "react";
import { ListGroup } from "react-bootstrap";
import PlayerComponent from "./player.component";

//Shows list of player detail cards sorted by player turn
//playerlist prop is defined by parent component (index)
// i is the index of the playerlist array, used as an identifying key for each PlayerComponent in the list

function PlayerList(props){
    
    const listDisplay = props.playerlist.map((player, i) =>
         <PlayerComponent key={i} plr={player}/>        
    );
    
    return <ListGroup>{listDisplay}</ListGroup>
}
export default PlayerList;