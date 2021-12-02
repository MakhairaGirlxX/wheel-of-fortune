//import
import * as React from "react";
import { ListGroup } from "react-bootstrap";
import LetterBankBtn from "./letterBankBtn.js"

//components
export default class LetterBankFactory extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      ltrArr: props.letterArray,
      className: props.className
    }
  }

  render(){
    let btnGroup = []

    btnGroup = this.state.ltrArr.map((character) =>
    <LetterBankBtn letter={character} class={this.state.className}/>)

    return (
      <div>
        <ListGroup horizontal>{btnGroup}</ListGroup>
      </div>
    )
  }
}