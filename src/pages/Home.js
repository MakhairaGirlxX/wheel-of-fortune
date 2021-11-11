import * as React from 'react'
import Layout from '../buildcomponents/layout'
import PlayerList from '../Components/players/playerlist.component'
import LetterBankFactory from './letterbank.js'


import 'bootstrap/dist/css/bootstrap.css'
import { Col } from 'react-bootstrap'
import { render } from 'react-dom'

// markup
// Col is a component defined in bootstrap-react
const HomePage = () => {

  const plist = [{playername: "player1name", funds: 800, id: "1a"},
  {playername: "player2name", funds: 600, id: "2b"},
  {playername: "player3name", funds: 400, id: "3c"},
  {playername: "player4name", funds: 200, id: "4d"}]

  const consonantArr = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"]
  const vowelArr = ["A", "E", "I", "O", "U", "Y"]
  
  return (
   <Layout pageTitle="Wheel Of Fortune!">
     <Col sm={{span:3, offset:9}}>
        <PlayerList playerlist={plist}/>
     </Col>
     <Col> 
        <LetterBankFactory consonantArr = {consonantArr} vowelArr = {vowelArr} vowelBool = {true}/>
     </Col>
     <p>Let's get Started.</p>
   </Layout>
  )
}

export default HomePage