import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Button, Alert, Row, Col } from 'react-bootstrap';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

class ActionButtons extends Component{
  constructor(props){
    super(props);
    this.state = {
      isConsonant: false,
      isVowel: false,
      isGuess: false
      
    }
    this.handleConsClick = this.handleConsClick.bind(this);    
    this.handleVowelClick = this.handleVowelClick.bind(this);    
    this.handleGuessClick = this.handleGuessClick.bind(this);
    
  }
  
  handleConsClick = () => {
    this.props.onConsClick();
  }
  handleVowelClick = () => {
    this.props.onVowelClick();
  }
  handleGuessClick = () => {
    this.props.onGuessClick();
  }
  
  render(){
    return(
      <Row>
        <Col>
          <Button id="btnConsonant" variant="primary" disabled={this.props.isConsonant} onClick={this.handleConsClick}>Consonant</Button>
        </Col>
        <Col>
          <Button id="btnVowel" variant="primary" disabled={this.props.isVowel} onClick={this.handleVowelClick}>Vowel</Button>
        </Col>
        <Col>
          <Button id="btnGuess" variant="primary" disabled={this.props.isGuess} onClick={this.handleGuessClick}>Guess Phrase</Button>
        </Col>
      </Row>
    )
  }
}
export default ActionButtons;













