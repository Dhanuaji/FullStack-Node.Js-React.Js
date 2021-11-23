import React, { Component } from "react";

class AlertPractice extends Component {
    callAlert () {
        alert("Hello Guys");
    }

    button = () => {
        this.callAlert(result => {
            const alert = result;
            this.setState({ alert: alert });
        })
    }
    render() {
        // const { alert } = this.state;
        const { button } = this;   
        const alert2 = alert("THIS IS PAGE");
        return (
            <div>
                <button onClick={button}>Click Me</button>
                <div>
                    {alert2}
                </div>
            </div>
        )
    }
}
export default AlertPractice;