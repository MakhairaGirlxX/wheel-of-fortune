import * as React from 'react'
import Layout from '../buildcomponents/layout'
import PlayerList from '../Components/players/playerlist.component'


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
  
  return (
   <Layout pageTitle="Wheel Of Fortune!">
     <Col sm={{span:3, offset:9}}>
        <PlayerList playerlist={plist}/>
     </Col>
     <p>Let's get Started.</p>
   </Layout>
  )
}

export default HomePage