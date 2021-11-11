import * as React from 'react'
import Layout from '../buildcomponents/layout'
import PlayerList from '../Components/players/playerlist.component'
import SpinButton from '../Components/spinButton.component'
import LetterBankFactory from './letterbank.js'


import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Game from './game'
//import { render } from 'react-dom'      *Currently unused, keep for later if needed*

// markup
// Col is a component defined in bootstrap-react
const HomePage = () => {

  
  return (
    <Layout pageTitle="Wheel Of Fortune!">
      <Game/>
    </Layout>
  const consonantArr = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"]
  const vowelArr = ["A", "E", "I", "O", "U", "Y"]
  const plist = [{playername: "player1name", funds: 800, id: "1a"},
     <Col> 
        <LetterBankFactory consonantArr = {consonantArr} vowelArr = {vowelArr} vowelBool = {true}/>
     </Col>
  )
}

export default HomePage
