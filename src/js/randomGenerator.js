const randomGenerator = () => {
    const options = ['Scissors', 'Paper', 'Rock'];
    return options[Math.floor(Math.random()*options.length)];
}

export default randomGenerator;