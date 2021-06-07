import play from './play';
import reset from './reset';
import gameOver from './gameOver';
import addImages from './addImages';

import '../css/style1.scss';
import '../css/cards.less';
import '../css/buttons.sass';

let roundCounter = 0;
let personPoints = 0;
let compPoints = 0;
const roundsAmount = 3;

document.addEventListener('click', (event) => {
    if(event.target.nodeName === 'BUTTON'){
        roundCounter++;
        const roundResult = play(roundCounter, event.target.id);
        personPoints += roundResult.personPoints;
        compPoints += roundResult.compPoints;

        if(roundCounter === roundsAmount){
            gameOver(personPoints, compPoints);
        }
    }
    if(event.target.nodeName === 'A'){
        event.preventDefault();
        const resetStore = reset();
        roundCounter = resetStore.counter;
        personPoints = resetStore.personPoints;
        compPoints = resetStore.compPoints;
    }
});

addImages();