// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    clicker = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        }, () => console.log(this.state.timesClicked))
    }

    render () {
        return (
            <div>
                <h1>Digital Clicker</h1>
                <button onClick={this.clicker}>{this.state.timesClicked}</button>
            </div>
        )
    }
}