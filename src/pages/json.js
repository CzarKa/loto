

let jsonObt

const jsonBuild = (jsonObtOne, jsonObtTwo, win) => {
    let first = JSON.stringify(jsonObtOne)
    let second = JSON.stringify(jsonObtTwo)


    jsonObt = {

        selectedNumber: {
            firstField:  first ,
            secondField:  second
        },

        isTicketWon: win
    }
}


export default jsonBuild
