import * as React from "react"
import {} from './index.sass';
import iconImg from "../images/magic-wand.png";
import checkWin from './data';
import newColor from "./color";


const buttonOneData = [
    { id: 1, val: '1'},{id: 2,val: '2'},{id: 3,val: '3'},{id: 4,val: '4'},{id: 5,val: '5'},{id: 6,val: '6'},{id: 7,val: '7'},{id: 8,val: '8'},{id: 9,val: '9'},
    {id: 10,val: '10'},{id: 11,val: '11'},{id: 12,val: '12'},{id: 13,val: '13'},{id: 14,val: '14'},{id: 15,val: '15'},{id: 16,val: '16'},{id: 17,val: '17'},{id: 18,val: '18'},{id: 19,val: '19'},

]



const buttonTwoData = [
    { id: 20, val: '1'},{id: 21,val: '2'},

]

let arrUserNumberTicket = []
let arrUserNumberTicketTwo = []
let arrRandomOne = []

arrRandomOne = Array.from({length: 8}, () => Math.floor(Math.random() * 19));

let arrRandomTwo = []

arrRandomTwo = Array.from({length: 1}, () => Math.floor(Math.random() * 2));

let nexTape = 0
let nexTapeTwo = 0

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            out: '8',
            outTwo: '1',
            defaultClass: 'numberOne',

        }
        this.refOutOne = React.createRef()
        this.refOutTwo = React.createRef()
    }


    tapeSum (val, id) {
        let value = val
        let idBtn = id
        let total = this.state.out - value
        let outOne = this.refOutOne.current

        if (idBtn !== nexTape) {
            nexTape = idBtn
            if (outOne.value <= 0) {

            } else {

                this.setState( {
                        out: total
                    }
                )

                outOne.value = total
                arrUserNumberTicket.push(idBtn)
                newColor(idBtn)
            }
        }
    }

    tapeSumTwo (val, id) {
        let value = val
        let idBtn = id - 19
        let total = this.state.outTwo - value
        let outTwo = this.refOutTwo.current

        if (nexTapeTwo !== idBtn) {
            if (outTwo.value <= 0) {

            } else {

                this.setState({
                        outTwo: total
                    }
                )
                outTwo.value = total
                arrUserNumberTicketTwo = idBtn
                newColor(id)
            }
        }
    }



    render() {
        return (
            <main>
                <div className='cart'>
                    <div className="blockCartInto">
                        <div className="title">
                            <h1>Билет 1</h1>
                            <img id="img" className="imgIcon" src={iconImg} alt="icon"/>
                        </div>
                            <div id="bodyWin">
                                <div id="bodyTicket">
                                    <div className="description">
                                        <p className="titleDescription">Поле 1</p>
                                        <p ref={this.refOutOne} className="text">Отметьте {this.state.out} чисел.</p>
                                    </div>
                                    <div id="block1"  className="blockNumber">
                                        { buttonOneData.map(({id, val}) => (

                                            <button
                                                id={id}
                                                ref={id}
                                                key={id}
                                                onClick={() => {this.tapeSum(1, id)}}
                                                className={this.state.defaultClass}
                                            >{val}</button>

                                        ))}
                                    </div>
                                    <div className="description">
                                        <p className="titleDescription">Поле 2</p>
                                        <p ref={this.refOutTwo} className="text">Отметьте {this.state.outTwo} число.</p>
                                    </div>
                                    <div id="block2"  className="blockNumber">
                                        { buttonTwoData.map(({val, id}) => (

                                            <button
                                                id={id}
                                                ref={id}
                                                key={id}
                                                onClick={() => {this.tapeSumTwo(1, id)}}
                                                className={this.state.defaultClass}
                                            >{val}</button>

                                        ))}
                                    </div>
                                    <button onClick={() => {checkWin(arrUserNumberTicket, arrUserNumberTicketTwo, arrRandomOne, arrRandomTwo)}} className="btnGame">Показать результат</button>
                                </div>
                            </div>
                    </div>
                </div>
            </main>
        )
    }
}



export default App
