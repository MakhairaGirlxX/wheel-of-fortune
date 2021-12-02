import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/wheel.css'

class Wheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSpinning: false}
        this.spin = this.spin.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    refresh() {this.setState({isSpinning: !this.state.isSpinning});}

    spin() {
        // randomly select unused card
        let randomNum = Math.floor(Math.random()*24);
        while (!this.props.wheel.cards[randomNum].active) {
            randomNum = Math.floor(Math.random()*24);
        }

        this.props.spinFunction(randomNum);
        this.setState({isSpinning: !this.state.isSpinning});
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

        // Animating with CSS styles and keyframes
        let styleSheet = document.styleSheets[0];
        let animationName = `customSpin`;
        let keyframes = `@keyframes ${animationName} {
            from {
                transform: rotate(${this.props.wheel.start}deg);
            }
            to {
                transform: rotate(${this.props.wheel.end}deg);
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
                width: '300px',
                transform: `rotate(${this.props.wheel.pos * (360/24) + 7.5}deg)`
            };
        }


        return <Container>
            <Button
                variant="primary"
                disabled={!isSpinning}
                onClick={this.refresh}
            >Refresh
            </Button>
            <div className={`pointer`} />
            <div style={style} />
            {isSpinning ? '' :
                <Button
                    variant="primary"
                    disabled={isSpinning}
                    onClick={this.spin}
                    >{isSpinning ? 'Spinning...' : 'Spin'}
                </Button>
            }
        </Container>
    }
}
export default Wheel;
