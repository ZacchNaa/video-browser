import React from 'react'
import VideoItem from './VideoItem/VideoItem';
import "./VideoList.css"

const VideoList = ({ videos, onVideoSelect }) => {
	const renderVideoList = videos.map((video) => (
		<VideoItem
			key={video.id.videoId}
			video={video}
			onVideoSelect={onVideoSelect}
		/>
	));
	return <div className="videoList">{renderVideoList}</div>;
};

export default VideoList
