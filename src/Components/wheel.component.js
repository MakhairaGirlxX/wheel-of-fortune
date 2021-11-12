import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/wheel.css'

class Wheel extends React.Component {
    constructor() {
        super();
        this.state = {isSpinning: false}
        this.spin = this.spin.bind(this);
    }

    spin() {
        this.setState({isSpinning: !this.state.isSpinning})
    }

    render() {
        const { isSpinning } =  this.state;

        return <Container>
            <div className={`wheel ${isSpinning ? 'spin' : ''}`} />
            <br /><br /><br />
            <Button
                variant="primary"
                onClick={this.spin}
                >Spin
            </Button>
        </Container>
    }
}
export default Wheel;