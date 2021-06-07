const reset = () => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    const buttons = document.querySelectorAll('button');
    buttons.forEach(elem => {
        elem.disabled = false;
    });

    return {
        counter: 0,
        personPoints: 0,
        compPoints: 0
    };
}

export default reset;