//import
import * as React from "react";
import LBtnFactory from "./letterbankFactory";
// import * as Modal from 'react-responsive-modal';
import Modal from "react-responsive-modal";

//components
export default class LttrBnkModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            vowelBool: props.vowelBool,
            ltrArr: props.ltrArr,

            show: false
        }
    }

    open = e =>{
        e.preventDefault()
        this.setState({show : true})
    }

    onClose = ()=>{
        this.setState({show : false})
    }

    render(){
        
        return(
            <>
                <Modal open={this.state.show} onClose={this.state.show} centered={true} scrollable={true} size='lg'>
                    <LBtnFactory vowelBool = {this.state.vowelBool} letterArray={this.state.ltrArr}/>
                </Modal>
            </>
        )
    }
}