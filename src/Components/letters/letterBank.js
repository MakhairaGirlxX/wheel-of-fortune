//import
import * as React from "react"
import LBtnFactory from "./letterbankFactory"

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
        let letterArr = [];
        let className = "";

        if (this.state.vowelBool){
            letterArr = this.state.consonantArr;
            className="vowel";
        } else {
            letterArr = this.state.vowelArr;
            className="consonant";
        }

        return (
            <LBtnFactory letterArray = {letterArr} className = {className}/>
        )
    }
}