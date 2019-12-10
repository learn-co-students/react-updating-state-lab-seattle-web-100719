// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            <div>
                <h1>YouTube Debugger</h1>
                <button className="bitrate" onClick={this.changeBitrate}>Bitrate is {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.changeResolution}>Resolution is {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}