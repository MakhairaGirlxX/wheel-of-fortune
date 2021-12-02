//import
import React from "react";
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import LetterBank from './letterbank';

//components
export default class LttrBnkModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            vowelBool: props.vowelBool,
        }

        this.handleClose = this.handleClose.bind(this)
    }

    handleClose = () =>{
        this.setState({show: false})
    }

    render(){
        if(!this.state.show) return null;

        return(
            <Modal isOpen={this.show} centered={true} scrollable={true} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> <LetterBank vowelBool={this.vowelBool}/> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
