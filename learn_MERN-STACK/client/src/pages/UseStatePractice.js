import React, { Component } from "react";

class UseStatePractice extends Component {
    state = {
        text: "Hujan"
    }

    callText = callBack => {
        setTimeout(() => {
            callBack("KEMARIN");
        }, 5000);
    }

    button = () => {
        this.callText(result => {
            const text1 = result;
            this.setState({ text: text1 })
        })
    }
    render() {

        const { text } = this.state;
        const { button } = this;
        
        return (
            <div className="App">
                <button onClick={button}>text</button>
                <h3>{text}</h3>
            </div>
        )
    }
}

export default UseStatePractice;