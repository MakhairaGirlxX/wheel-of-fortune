import React from "react";
import { Card, ListGroup } from "react-bootstrap";
//Shows details about player(name, current balance, etc.)
//plr is defined by the calling playerlist component
function PlayerComponent(props){   
    return <ListGroup.Item className="m-0 mt-1 p-0 border rounded border-dark"><Card className="rounded justify-content-center text-center ">
        <Card.Title className="bg-secondary text-light py-1 my-0 border-bottom border-dark">{props.plr.playername}</Card.Title>
        <Card.Body className="bg-success text-light bold pt-1 pb-1">${props.plr.funds}</Card.Body>
    </Card></ListGroup.Item>
}
export default PlayerComponent;