import * as React from 'react'
import Layout from '../buildcomponents/layout'
import PlayerList from '../Components/players/playerlist.component'
import SpinButton from '../Components/spinButton.component'

import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Game from './game'
//import { render } from 'react-dom'      *Currently unused, keep for later if needed*

// markup
// Col is a component defined in bootstrap-react
const HomePage = () => {

  // const plist = [{playername: "player1name", funds: 800, id: "1a"},
  // {playername: "player2name", funds: 600, id: "2b"},
  // {playername: "player3name", funds: 400, id: "3c"},
  // {playername: "player4name", funds: 200, id: "4d"}];
  
  
  return (
    <Layout pageTitle="Wheel Of Fortune!">
      <Game/>
      
    <p>Let's get Started.</p>
    </Layout>
  )
}

export default HomePage
