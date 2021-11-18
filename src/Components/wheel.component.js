import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/wheel.css'

class Wheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSpinning: false,
            enableSpin: false
        }
        this.spin = this.spin.bind(this);        
    }

    spin() {
        this.setState({isSpinning: !this.state.isSpinning})
    }
    
    static getDerivedStateFromProps(newProps, state) {
        if (newProps.enableSpin !== state.enableSpin) {
            return {
                enableSpin: newProps.enableSpin
            }
        }
        return null;
    }

    render() {
        const { isSpinning } =  this.state;

        return <Container>
            <div className={`wheel ${this.state.isSpinning ? 'spin' : ''}`} />
            <br /><br /><br />
            <Button
                variant="primary"
                onClick={this.spin}
                disabled={!this.state.enableSpin}
                >Spin
            </Button>
        </Container>
    }
}
export default Wheel;