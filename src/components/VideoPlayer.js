import React from 'react'
import ReactPlayer from 'react-player'
const VideoPlayer = ({ id }) => {
    return (
        <div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" playing={true}/>
        </div>
    )
}

export default VideoPlayer