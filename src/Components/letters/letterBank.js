//import
import * as React from "react"
import LttrBnkModal from ".lttrBnkModal"

//components
export default class LetterBank extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            vowelBool: props.vowelBool,
            consonantArr: ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"],
            vowelArr: ["A", "E", "I", "O", "U", "Y"]
        }
    }

    render(){

        if (vowelBool) let letterArr = consonantArr;
         else let letterArr = vowelArr;

        return (
            <>
                <LttrBnkModal vowelBool={this.state.vowelBool} ltrArr={letterArr}/>
            </>
        )
    }
}