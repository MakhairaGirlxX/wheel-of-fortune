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

  
  return (
    <Layout pageTitle="Wheel Of Fortune!">
      <Game/>
    </Layout>
  )
}

export default HomePage
