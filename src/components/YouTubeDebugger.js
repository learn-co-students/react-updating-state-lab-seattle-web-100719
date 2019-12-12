// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{

    constructor(){
        super()
        this.state = {
            user: null,
            errors: [],
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrate = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            }
        }, () => {
            console.log(this.state.settings.bitrate)
        })
    }

    handleResolution = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...this.state.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        }, () => {
            console.log(this.state.settings.video.resolution)
        })

    }

    render(){
        return <div>
            <button className="bitrate" onClick={this.handleBitrate}>bitrate</button>
            <button className="resolution" onClick={this.handleResolution}>resolution</button>
        </div>
    }

}