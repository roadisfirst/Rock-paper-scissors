const roundResultsEvaluation = (personChoise, compChoise) => {
    if (personChoise === compChoise){
        return {
            message: `It's a draw`,
            personPoints: 0,
            compPoints: 0
        };
    } else if (personChoise === 'Scissors' && compChoise === 'Paper' 
        || personChoise === 'Rock' && compChoise === 'Scissors' 
        || personChoise === 'Paper' && compChoise === 'Rock'){
            return {
                message: `You've WON!`,
                personPoints: 1,
                compPoints: 0
            };
    } else {
        return {
            message: `You've LOST!`,
            personPoints: 0,
            compPoints: 1
        };
    }
}

export default roundResultsEvaluation;