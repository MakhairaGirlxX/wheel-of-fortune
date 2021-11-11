import React from 'react';
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';


function SpinButton(props) {
    const [isSpinning, setSpinning] = useState(false);
    const [isVisible, setVisible] = useState(props.isVisible);
    const handleClick = () => setSpinning(true);
    useEffect(() => {
        if (isSpinning) {
        simulateNetworkRequest().then(() => {
            setSpinning(false);
            setVisible(false);
        });
        }
    }, [isSpinning]);

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (!isVisible) {return null;}
    
    return <Button
        variant="primary"
        disabled={isSpinning}
        onClick={!isSpinning ? handleClick : null}
        >
        {isSpinning ? 'Spinning...' : 'Spin'}
    </Button>
}
export default SpinButton;