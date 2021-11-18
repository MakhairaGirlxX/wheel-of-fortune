//import
import * as React from "react";

//components
export default class LetterBankBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            letter:  props.letter
        }
    }

    handleClick

    render() {
        return(
            <div>
                <button> {this.state.letter} </button>
            </div>
        )
    }
}