//import
import * as React from "react";
import { Button } from 'react-bootstrap';

//components
export default class LetterBankBtn extends React.Component {
    constructor(props) {
        super(props);
        1
        this.state = {
            letter:  props.letter
        }
    }

    render() {

        return(
            <div>
                <Button 
                id={this.state.letter} 
                variant="primary"
                height="100"> 
                {this.state.letter} 
                </Button>
            </div>
        )
    }
}