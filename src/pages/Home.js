import * as React from 'react'
import Layout from '../buildcomponents/layout'
import PlayerList from '../Components/players/playerlist.component'
import SpinButton from '../Components/spinButton.component'
import Wheel from '../Components/wheel.component'

import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'
//import { render } from 'react-dom'      *Currently unused, keep for later if needed*

// markup
// Col is a component defined in bootstrap-react
const HomePage = () => {

  const plist = [{playername: "player1name", funds: 800, id: "1a"},
  {playername: "player2name", funds: 600, id: "2b"},
  {playername: "player3name", funds: 400, id: "3c"},
  {playername: "player4name", funds: 200, id: "4d"}];
  
  
  return (
    <Layout pageTitle="Wheel Of Fortune!">
      <Container fluid>
        <Row>
          <Col sm={{span:4, offset:4}}>
            <SpinButton isVisible={true} />
            <Wheel start={0} end={1087.5} />
          </Col>
          <Col sm={{span:3, offset: 1}}>
            <PlayerList playerlist={plist}/>
          </Col>
        </Row>
      </Container>
    <p>Let's get Started.</p>
    </Layout>
  )
}

export default HomePage