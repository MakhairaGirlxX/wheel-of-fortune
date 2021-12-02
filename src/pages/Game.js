import React from "react";
import { Component, setState } from "react";
import PlayerList from "../Components/players/playerlist.component";
import SpinButton from "../Components/spinButton.component";
import Wheel from "../Components/wheel.component";
import ActionButtons from "../Components/actions/actionList.component";
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
import LBModal from "../Components/letters/LttrBnkModal.js";
import Board from '../../board.component'

// Game shell
class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            plist : [{playername: "player1name", funds: 800, id: "1a"},
            {playername: "player2name", funds: 600, id: "2b"},
            {playername: "player3name", funds: 400, id: "3c"}],
            wheel: {start: 0, end: 360, pos: 0, cards: this.buildCards()},
            isVowel: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
        this.updateFunds = this.updateFunds.bind(this);
        this.spinWheel = this.spinWheel.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    buildCards() {
        return [{cardType: "money", value: 500, active: true},
                {cardType: "action", action: "bankrupt", active: true},
                {cardType: "money", value: 300, active: true},
                {cardType: "money", value: 500, active: true},
                {cardType: "money", value: 450, active: true},
                {cardType: "money", value: 500, active: true},
                {cardType: "money", value: 800, active: true},
                {cardType: "action", action: "loseturn", active: true},
                {cardType: "money", value: 700, active: true},
                {cardType: "action", action: "freeplay", active: true},
                {cardType: "money", value: 650, active: true},
                {cardType: "action", action: "bankrupt", active: true},
                {cardType: "money", value: 900, active: true},
                {cardType: "money", value: 500, active: true},
                {cardType: "money", value: 350, active: true},
                {cardType: "money", value: 600, active: true},
                {cardType: "money", value: 500, active: true},
                {cardType: "money", value: 400, active: true},
                {cardType: "money", value: 550, active: true},
                {cardType: "money", value: 800, active: true},
                {cardType: "money", value: 300, active: true},
                {cardType: "money", value: 700, active: true},
                {cardType: "money", value: 900, active: true},
                {cardType: "money", value: 500, active: true}
            ];
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

    spinWheel(newPos) {
        let newStart = this.state.wheel.pos * (360/24) + 7.5;
        let newEnd = newPos * (360/24) + 7.5 + 1080;
        let newCards = [...this.state.wheel.cards];
        newCards[newPos].active = false;

        this.setState({
            wheel: {start: newStart, end: newEnd, pos: newPos, cards: newCards}
        })
    }
    
    handleConsClick(){
        let enable2 = this.state.enableSpin;
        enable2 = !enable2;
        this.setState({
            enableSpin: enable2
        })
    }

    handleOpen = () =>{
        this.setState({show: true})
    }
    
    handleVowelClick(){
        /*  alert('vowel clicked!') */
        this.setState({isVowel: true});
        <LBModal isOpen={this.handleOpen} vowelBool={this.isVowel}/>
    }
    
    handleGuessClick(){
        alert('guess clicked!')
    }
    
    render(){

        return(
            <Container fluid>
                <Row>
                    <Col sm={{span:3, offset:6}}>
                        <Wheel
                            wheel={this.state.wheel}
                            spinFunction={this.spinWheel}
                        />
                    </Col>
                    <Col sm={{span:2, offset:1}}>
                        <PlayerList id="playerListElement" players={this.state.plist}/>
                    </Col>
                    <Row>
                        <Col sm={{span:12, offset:0}}>
                            <ActionButtons onVowelClick={this.handleVowelClick} onGuessClick={this.handleGuessClick} onConsClick={this.handleConsClick} />
                        </Col>
                    </Row>
                </Row>
             
            </Container>
        )
    }
}
export default Game;
