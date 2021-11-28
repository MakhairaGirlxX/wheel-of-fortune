//import
import * as React from "react";
import { ListGroup } from "react-bootstrap";
import LetterBankBtn from "./letterBankBtn.js"

//components
export default class LetterBankFactory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      vowelBool:  props.vowelBool,
    }
  }

  render(){
    let btnGroup = [];

    if (this.state.vowelBool) {
        btnGroup = this.state.vowelArr.map((character) =>
        <LetterBankBtn letter = {character} />)
    } else {
        btnGroup = this.state.consonantArr.map((character) =>
        <LetterBankBtn letter = {character} />)
    }

    return (
      <div>
        <ListGroup>{btnGroup}</ListGroup>
      </div>
    )
  }
}