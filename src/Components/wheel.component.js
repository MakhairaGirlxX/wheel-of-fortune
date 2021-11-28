import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/wheel.css'

class Wheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSpinning: false}
        this.spin = this.spin.bind(this);
    }

    spin() {
        this.setState({isSpinning: !this.state.isSpinning});
    }

    render() {
        const { isSpinning } =  this.state;

        // Animating with CSS styles and keyframes
        let styleSheet = document.styleSheets[0];
        let animationName = `customSpin`;
        let keyframes = `@keyframes ${animationName} {
            from {
                transform: rotate(${this.props.start}deg);
            }
            to {
                transform: rotate(${this.props.end}deg);
            }
        }`;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        let style;
        if (isSpinning) {
            style = {
                content: 'url("https://wheel.fhtl.byu.edu/images/wheel.png")',
                height: '300px',
                width: '300px',
                animationTimingFunction: 'ease-in-out', 
                animationName: `${animationName}`,
                animationDuration: '3s',
                animationDelay: '0',
                animationIterationCount: 1,
                animationDirection: 'normal',
                animationFillMode: 'forwards'
            };
        } else {
            style = {
                content: 'url("https://wheel.fhtl.byu.edu/images/wheel.png")',
                height: '300px',
                width: '300px'
            };
        }


        return <Container>
            <div className={`pointer`} />
            <div style={style} />
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