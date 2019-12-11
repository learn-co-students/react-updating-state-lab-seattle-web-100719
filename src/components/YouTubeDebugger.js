// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
    
    constructor(){
        super()
        this.state= {
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


    handelBitrateClick = () =>{
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        })
    }

    handelResolutionClick = () =>{
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        })

    }


    render(){
        return <div>
            <button className ="bitrate" onClick={this.handelBitrateClick}> Bitrate button</button>
            <button className ="resolution" onClick={this.handelResolutionClick}> Resolution button</button>
            </div>
    }
    
}

export default YouTubeDebugger