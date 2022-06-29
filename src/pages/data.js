import winUsers from "./win";
import lostUsers from "./lost";
import jsonBuild from "./json";

const checkWin = function (arrUserNumberTicket, arrUserNumberTicketTwo, arrRandomOne, arrRandomTwo) {


        let balls = 0
        let ballsOne = 0
        let ballsTwo = 0
        let ln1 = arrUserNumberTicket.length
        let ln2 = arrRandomOne.length
        let cache
        let win
        let jsonObtOne = arrUserNumberTicket
        let jsonObjTwo = arrUserNumberTicketTwo

        for (let i = 0; i < ln1; ++i) {
            cache = arrUserNumberTicket[i]
            for (let j = 0; j < ln2; ++j) {
                if (cache === arrRandomOne[j]) {
                    ballsOne += 1
                }
            }

        }

        if (arrUserNumberTicketTwo[0] === arrRandomTwo[0] ) {
            ballsTwo += 1
        }


        balls = ballsOne + ballsTwo


        if (balls >= 4) {
            winUsers()
            win = true
        } else {
            lostUsers()
            win = false
        }

        jsonBuild(jsonObtOne, jsonObjTwo, win)

    }

export default checkWin

