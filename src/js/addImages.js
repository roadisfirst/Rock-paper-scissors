import scissors from '../images/scissors.png';
import paper from '../images/paper.png';
import rock from '../images/rock.png';

const addImages = () => {
    const scissorsPic = new Image();
    const paperPic = new Image();
    const rockPic = new Image();

    scissorsPic.src = scissors;
    paperPic.src = paper;
    rockPic.src = rock;

    const scissorsDiv = document.getElementById('item-scissors');
    scissorsDiv.append(scissorsPic);

    const paperDiv = document.getElementById('item-paper');
    paperDiv.append(paperPic);

    const rockDiv = document.getElementById('item-rock');
    rockDiv.append(rockPic);
}

export default addImages;