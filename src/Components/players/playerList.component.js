import React from "react";
import PlayerComponent from "./player.component";

//Shows list of player detail cards sorted by player turn

function PlayerList(props){
    
    const listDisplay = props.playerlist.map((player, i) =>
         <PlayerComponent key={i} plr={player}/>
        
    );
    
    return <ul>{listDisplay}</ul>
}
export default PlayerList;