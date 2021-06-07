import randomGenerator from './randomGenerator';
import roundResultsEvaluation from './roundResultsEvaluation';
import toUpperCase from './toUpperCase';

const play = (counter, buttonType) => {
        const resultsDiv = document.getElementById('results');
        let roundInfo = document.createElement('p');
        const person = toUpperCase(buttonType);
        const comp = randomGenerator();
        const roundResutls = roundResultsEvaluation(person, comp);
        roundInfo.innerHTML = `Round ${counter} ${person} vs. ${comp}, ${roundResutls.message}`;
        resultsDiv.append(roundInfo);
        return {
            personPoints: roundResutls.personPoints,
            compPoints: roundResutls.compPoints
        }
}

export default play;