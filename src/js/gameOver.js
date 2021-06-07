const gameOver = (points1, points2) => {
    let finalResultText, resultClassName;
    if(points1 > points2){
        finalResultText = `Congratulations! You are the WINNER!`;
        resultClassName = 'success';
    } else if(points1 < points2){
        finalResultText = `Sorry! Good luck next time.`;
        resultClassName = 'alert';
    } else {
        finalResultText = `No way! It's a draw.`;
        resultClassName = 'neutral';
    }
    const resultsDiv = document.getElementById('results');
    let finalResult = document.createElement('p');
    finalResult.classList.add('final');
    finalResult.classList.add(resultClassName);
    finalResult.textContent = finalResultText;
    resultsDiv.append(finalResult);
    const buttons = document.querySelectorAll('button');
    buttons.forEach(elem => {
        elem.disabled = true
    });
}

export default gameOver;