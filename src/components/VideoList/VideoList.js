import React from 'react'
import VideoItem from '../AppTitle/VideoItem/VideoItem'
import "./VideoList.css"

const VideoList = ({ videos }) => {
    const renderVideoList = videos.map(video=> <VideoItem key={video.id} video={video} />)
    return <div className="videoList">{renderVideoList}</div>;
}

export default VideoList
