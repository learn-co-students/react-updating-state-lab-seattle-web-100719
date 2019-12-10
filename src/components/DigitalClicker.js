// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor(props) {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = (event) => {
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    } 

    render() {
        return (
            <button onClick={this.handleClick} >{this.state.timesClicked}</button>
        )
    }
}