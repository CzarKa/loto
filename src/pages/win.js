

const winUsers = () => {
    let elem = document.getElementById('bodyTicket');
    elem.className="off"

    let img = document.getElementById('img');
    img.className="off"


    let textWin = document.createElement('p');
    textWin.className="textWin"
    textWin.innerHTML = "Ого, вы выиграли! Поздравляем! ";
    document.getElementById('bodyWin').append(textWin);
}

export default winUsers

