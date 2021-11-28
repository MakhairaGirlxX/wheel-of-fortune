//import
import * as React from "react";
import { ListGroup } from "react-bootstrap";
import LetterBankBtn from "./letterBankBtn.js"

//components
export default class LetterBankFactory extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      vowelBool: props.vowelBool,
      ltrArr: todo
    }
  }

  render(){
    let btnGroup = []
    const className=""

    if(vowelBool){ className="vowel";}
      else {className="consonant";}

    btnGroup = this.state.ltrArr.map((character) =>
    <LetterBankBtn letter={character} class={className}/>)

    return (
      <div>
        <ListGroup>{btnGroup}</ListGroup>
      </div>
    )
  }
}