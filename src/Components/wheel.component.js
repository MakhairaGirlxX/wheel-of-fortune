import React from 'react';
import { Container, Button } from 'react-bootstrap';

class Wheel extends React.Component{
    constructor(props){
        super(props);
        this.state = { rotation: 0, spin: 0 }
        this.rotate = this.rotate.bind(this);
        this.spin = this.spin.bind(this);
    }
    
    rotate() {
        let newRotation = this.state.rotation + 45;
        if (newRotation >= 360) { newRotation =- 360; }
        this.setState({ rotation: newRotation, })
    }
    
    spin() {
        let newSpin = this.state.spin + 45;
        if (newSpin >= 360) { newSpin =- 360; }
        this.setState({ spin: newSpin, })

        /*
        function delay(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }

        for (let i=0; i<1; i++) {
            delay(500).then(() => {
                newSpin += 45;
                if (newSpin >= 360) { newSpin =- 360; }
                this.setState({ spin: newSpin, })
                
                delay(500).then(() => {
                    newSpin += 45;
                    if (newSpin >= 360) { newSpin =- 360; }
                    this.setState({ spin: newSpin, })
                });
            });
        }
        */
        
        let spinCounter = 0;
        function spinLoop() {
            setTimeout(function() {
                newSpin += 45;
                if (newSpin >= 360) { newSpin =- 360; }
                this.setState({ spin: newSpin, })

                spinCounter++;
                if (spinCounter<4) spinLoop();
            }, 500)
        }   
        spinLoop();
    }

    render() {
        const { rotation, spin } = this.state;
        return <Container>
            <img style={{
                transform: `rotate(${rotation}deg)`}}
                src={"https://wheel.fhtl.byu.edu/images/wheel.png"}
                width="300"
                height="300"
            />
            <br /><br /><br />
            <Button
                variant="primary"
                onClick={this.rotate}
                >Rotate
            </Button>
            <Button
                variant="primary"
                onClick={this.spin}
                >Spin
            </Button>
        </Container>
    }
  }
  
  const element = <Wheel /> 
  
export default Wheel;
  