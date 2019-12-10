// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor(props) {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleClick = (event) => {
        this.setState(prevState => {
            return {
                settings: {
                    ...prevState.settings,
                    bitrate: 12
                }
            }
        })
    }
    handleRez = (event) => {
        this.setState(prevState => {
            return {
                settings: {
                    ...prevState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (<div>
                <button className="bitrate" onClick={this.handleClick}>Bitrate</button>
                <button className="resolution" onClick={this.handleRez}>Resolution</button>
            </div>
        )
    }
}