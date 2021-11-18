import React from "react";
import { useEffect, useState } from "react";
import { Button, Alert } from 'react-bootstrap';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function ActionButtons() {
  const [isConsonant, setConsonant] = useState(false);
  const [isVowel, setVowel] = useState(false);
  const [isPhrase, setPhrase] = useState(false);
  useEffect(() => {
    if (isConsonant) {
      /*
        Get rid of simulateNetworkRequest -> this just times the button out
        Spin Wheel
        Bring to guessing letter function
      */
      simulateNetworkRequest().then(() => {
        setConsonant(false);
      });
    }
    if(isVowel) {
      /*
        Get rid of simulateNetworkRequest -> this just times the button out
        Enter function connecting to 
         1. Check money to see if able to buy vowel?
         2. Deduct money
         3. Bring to guessing letter function
      */
      simulateNetworkRequest().then(() => {
        setVowel(false);
      });
    }
    if(isPhrase) {
      /*
        Get rid of simulateNetworkRequest -> this just times the button out
        Bring to guessing phrase function
      */
      simulateNetworkRequest().then(() => {
        setPhrase(false);
      });
    }
  });

  //Handles Guessing a Consonant
  function handleClick1() {
    setConsonant(true);
  }

  //Handles Buying a Vowel
  function handleClick2() {
    setVowel(true);
  }

  //Handles Guessing the Phrase
  function handleClick3() {
    setPhrase(true);
  }

  return (
    <><Button
      id="Consonant"
      variant="primary"
      disabled={isConsonant}
      onClick={!isConsonant ? handleClick1 : null}
    >
      {isConsonant ? 'Guessing Consonant' : 'Guess a Consonant'}
    </Button>
    <Button
      id="Vowel"
      variant="primary"
      disabled={isVowel}
      onClick={!isVowel ? handleClick2 : null}
    >
      {isVowel ? 'Guessing Vowel' : 'Buy a Vowel'}
    </Button>
    <Button
      id="Phrase"
      variant="primary"
      disabled={isPhrase}
      onClick={!isPhrase ? handleClick3 : null}
    >
      {isPhrase ? 'Guessing Phrase' : 'Guess the Phrase'}
    </Button>
    </>

  );
}

export default ActionButtons;















