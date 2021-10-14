import React from "react";
import { Card, ListGroup } from "react-bootstrap";
//Shows details about player(name, current balance, etc.)
//plr is defined by the calling playerlist component
function PlayerComponent(props){   
    return <ListGroup.Item><Card className="justify-content-center text-center">
        <Card.Title className="justify-content-center pt-1 pb-0">{props.plr.playername}</Card.Title>
        <Card.Body className="justify-content-center pt-1 pb-0">${props.plr.funds}</Card.Body>
    </Card></ListGroup.Item>
}
export default PlayerComponent;