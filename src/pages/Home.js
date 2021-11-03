import * as React from 'react'
import Layout from '../buildcomponents/layout'
import PlayerList from '../Components/players/playerlist.component'


import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { useEffect, useState } from "react";
//import { render } from 'react-dom'      *Currently unused, keep for later if needed*

// markup
// Col is a component defined in bootstrap-react
const HomePage = () => {

  const plist = [{playername: "player1name", funds: 800, id: "1a"},
  {playername: "player2name", funds: 600, id: "2b"},
  {playername: "player3name", funds: 400, id: "3c"},
  {playername: "player4name", funds: 200, id: "4d"}];

  // Button animation
  const [isSpinning, setSpinning] = useState(false);
  const handleClick = () => setSpinning(true);
  useEffect(() => {
    if (isSpinning) {
      simulateNetworkRequest().then(() => {
        setSpinning(false);
      });
    }
  }, [isSpinning]);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  
  return (
    <Layout pageTitle="Wheel Of Fortune!">
      <Container fluid>
        <Row>
          <Col sm={{span:3, offset:6}}>
              <Image src="WheelofFortune.png" thumbnail /><br />
              <Button
                variant="primary"
                disabled={isSpinning}
                onClick={!isSpinning ? handleClick : null}
              >
                {isSpinning ? 'Spinning...' : 'Spin'}
              </Button>
          </Col>
          <Col sm={{span:3}}>
              <PlayerList playerlist={plist}/>
          </Col>
        </Row>
      </Container>
    <p>Let's get Started.</p>
    </Layout>
  )
}

export default HomePage