import * as React from 'react'
import Layout from '../buildcomponents/layout'

const styles = {
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  alignItems: {alignItems: 'right'}
}

const AboutPage = () => {
    return(
      <Layout pageTitle="About Game">
          <p>
            <p style={styles.bold}>Background information<br/></p>
            Wheel of Fortune has been a popular televised game show for many years. The game is to solve a word puzzle by the players. <br/>
            Initially, the puzzle is presented as a series of blank spots, one per letter of the puzzle. Punctuation, such as spaces, <br/>
            commas, etc., are displayed directly and do not need to be guessed during gameplay. Players fill in the puzzle by one of <br/>
            two ways. For consonants, players spin a large wheel made up of spaces of varying monetary amounts, along with some “bad” <br/>
            spaces, such as “Lose a Turn” and “Bankrupt”. If the spin results in a monetary amount, the player must guess a consonant. <br/>
            If the guessed letter exists in the puzzle, all instances of the letter are displayed, and the player is awarded an amount <br/>
            of money equal to the number of instances of the letter times the monetary amount resulting from the wheel spin. Once the <br/>
            player chooses to spin the wheel, they must guess a consonant - they may not “change their mind” and decide instead to buy <br/>
            a vowel or solve the puzzle. For vowels, the player does NOT spin the wheel. Instead, the player announces they wish to <br/>
            “buy a vowel”. A set amount (say $250, though it can’t a different amount) is deducted from their account and the player <br/>
            selects a vowel (vowels can’t be bought if the player has less than the required cost of a vowel). If the vowel is in the <br/>
            puzzle, all instances are displayed. No money is awarded for illuminating vowels, and the cost of buying a vowel is the same <br/>
            regardless of the number of instances of the vowel illuminated. Once a player chooses to buy a vowel, they must guess a vowel <br/>
            – they may not “change” their mind and decide instead to spin the wheel or solve the puzzle. Regardless of consonant or vowel, <br/>
            if the letter chosen by the player is in the puzzle, the player’s turn continues, otherwise, the player’s turn ends and play <br/>
            moves to the next player. If the player spins the wheel and lands on the “Lose A Turn” space, the player is not able to guess <br/>
            a letter, and play advances to the next player. If the player’s spins lands on “Bankrupt”, any money the player has <br/>
            accumulated is lost (their accumulated winnings are set to 0) and play advances to the next player. At any time, the active <br/>
            player may choose to solve the puzzle rather than spinning or buying a vowel. The player is given the chance to say what they <br/>
            believe the full puzzle is. The player must type a guess. The guess typed into a text field must match the hidden sentence <br/>
            (the puzzle) exactly including punctuation and white spaces except case differences.  If correct, the player wins the full <br/>
            amount of money they have accumulated, and all other players win nothing, regardless of how many letters they have guessed <br/>
            correctly and how much money they have accumulated. If the guess is incorrect, the player loses their turn, and play advances <br/>
            to the next player. If players try to solve the puzzle, they must make a guess – they may not “change their mind” and spin <br/>
            the wheel or buy a vowel instead.<br/>
          </p>
      </Layout>
    )
}

export default AboutPage