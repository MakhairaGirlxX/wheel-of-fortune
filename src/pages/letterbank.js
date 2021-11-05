//import
import * as React from "react";

//components
export class Letterbank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            letterArr: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        }
        this.removeGuess = this.removeGuess.bind(this);
    }

    removeGuess(val) {
        let letterArr2 = [...this.state.letterArr];
        let guessInd = -1

        guessInd = letterArr2.indexOf(val)
        if (guessInd !== -1) {letterArr2.splice(guessInd, 1)}

        this.setState({
            letterArr: letterArr2
        })
        
    }
    render() {
        return (<div>
            <p>{this.state.letterArr}</p>
            <button onClick={() => this.removeGuess("b")}>Click me </button>
        </div>);
    }
}