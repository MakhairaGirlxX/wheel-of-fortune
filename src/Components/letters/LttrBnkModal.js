//import
import * as React from "react";
import LBtnFactory from "./letterbankFactory";

//components
export default class LttrBnkModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            vowelBool: props.vowelBool
        }
    }

    render(){
        
        return(
            <div><LBtnFactory vowelBool = {this.state.vowelBool}/></div>
        )
    }
}