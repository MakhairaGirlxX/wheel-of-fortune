//import
import React from "react";
import { ListGroup } from "react-bootstrap";
import LetterBankBtn from "./letterBankBtn.js"

//components
export default function LetterBankFactory(props) {
    let btnGroup = [];
    if (props.vowelBool) {
        btnGroup = props.vowelArr.map((character) =>
        <LetterBankBtn letter = {character} />)
    } else {
        btnGroup = props.consonantArr.map((character) =>
        <LetterBankBtn letter = {character} />)
    }

    return (
        <ListGroup> {btnGroup} </ListGroup>
    )
}