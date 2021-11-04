import React from "react";
import { Component } from "react";
import PlayerList from "../Components/players/playerlist.component";

// Game shell
class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            plist : [{playername: "player1name", funds: 800, id: "1a"},
            {playername: "player2name", funds: 600, id: "2b"},
            {playername: "player3name", funds: 400, id: "3c"},
            {playername: "player4name", funds: 200, id: "4d"}]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // Example for updating player funds
    handleClick(e) {
        let plist2 = [...this.state.plist];
        plist2[0].funds += 200;
        this.setState( {
            plist: plist2
        });
    }
    
    render(){
        return(
        <div>
            <PlayerList id="playerListElement" players={this.state.plist} />
            <div><button onClick={this.handleClick} value="Click">Click</button></div>
        </div>
        )
    }
}
export default Game;