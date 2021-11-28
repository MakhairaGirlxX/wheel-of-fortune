//import
import * as React from "react";
import { ListGroup } from "react-bootstrap";
import LetterBankBtn from "./letterBankBtn.js"
import { Button, Modal, useState } from 'react-bootstrap';

//components
export default class LetterBankFactory extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let btnGroup = [];

    if (props.vowelBool) {
        btnGroup = props.vowelArr.map((character) =>
        <LetterBankBtn letter = {character} />)
    } else {
        btnGroup = props.consonantArr.map((character) =>
        <LetterBankBtn letter = {character} />)
    }

    getDerivedStateFromProps = (newProps, state) => {
        if(newProps.showModal !== state.showModal){
            return {
                showModal: newProps.showModal
            }
        }
        return null;
    }

    return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup> {btnGroup} </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>

    </div>
    )
  }
}