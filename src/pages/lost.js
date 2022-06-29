const lostUsers = () => {
    let elem = document.getElementById('bodyTicket');
    elem.className="off"

    let img = document.getElementById('img');
    img.className="off"


    let textWin = document.createElement('p');
    textWin.className="textWin"
    textWin.innerHTML = "Вы проиграли :(";
    document.getElementById('bodyWin').append(textWin);
}

export default lostUsers