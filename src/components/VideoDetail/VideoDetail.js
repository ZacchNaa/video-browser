import React from 'react'
import './VideoDetail.css'

const VideoDetail = ({video}) => {
    return (
        <div className="videoDetail">
            {video.snippet.title}
        </div>
    )
}

export default VideoDetail
