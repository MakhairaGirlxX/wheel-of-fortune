//import
import React from "react";
import Modal from 'react-bootstrap';
import LetterBank from './letterbank'

//components
export default class LttrBnkModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }

        this.open = this.open.bind(this)
    }

    open = () =>{
        this.setState({show: true})
    }

    render(){
        if(!this.state.show) return null;

        return(
            <Modal centered={true} scrollable={true} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> <LetterBank/> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}