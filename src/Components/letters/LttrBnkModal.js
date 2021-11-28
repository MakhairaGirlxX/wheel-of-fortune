//import
import * as React from "react";
import LBtnFactory from "./letterbankFactory";

//components
export default class LttrBnkModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            vowelBool: props.vowelBool,
            openModal: false
        }
    }

    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render(){
        
        return(
            <>
                <LBtnFactory vowelBool = {this.state.vowelBool}/>
            </>
        )
    }
}