import React from "react";
import { Card } from "react-bootstrap";
//Shows details about player(name, current balance, etc.)
function PlayerComponent(props){   
    return <li><Card className="justify-content-center text-center">
        <Card.Title className="justify-content-center pt-1 pb-0">{props.plr.playername}</Card.Title>
        <Card.Body className="justify-content-center pt-1 pb-0">${props.plr.funds}</Card.Body>
    </Card></li>
}
export default PlayerComponent;