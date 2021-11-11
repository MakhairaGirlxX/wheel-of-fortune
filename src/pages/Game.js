import React from "react";
import { Component } from "react";
import PlayerList from "../Components/players/playerlist.component";
import SpinButton from "../Components/spinButton.component";
import ActionButtons from "../Components/actions/actionList.component";
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

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
        this.addPlayer = this.addPlayer.bind(this);
        this.updateFunds = this.updateFunds.bind(this);
    }
    // Example for updating player funds
    handleClick(e) {
        let plist2 = [...this.state.plist];
        plist2[0].funds += 200;
        this.setState( {
            plist: plist2
        });
    }
    
    updateFunds(playerIndex, amount){
        let plist2 = [...this.state.plist];
        plist2[playerIndex].funds += amount;
        this.setState({
            plist: plist2
        });
    }
    
    addPlayer(name){
        let plist2 = [...this.state.plist];
        let salt = '#';
        for(var i = 0; i < 6; i++){
            salt +=  + Math.floor(Math.random()*9);
        }
        let saltedName = name + salt;
        plist2.push({playername: saltedName, funds: 0 });
        this.setState({
            plist: plist2
        })
    }
    
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col sm={{span:3, offset:6}}>
                        <SpinButton isVisible={true} />
                    </Col>
                    <Col sm={{span:3}}>
                        <PlayerList id="playerListElement" players={this.state.plist}/>
                    </Col>
                    <Col sm={{span:12, offset:0}}>
                        <ActionButtons />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Game;
