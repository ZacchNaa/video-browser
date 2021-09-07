import React from 'react'
import "./VideoItem.css"

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className="videoItem" onClick={() => onVideoSelect(video)}>
			<img
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="videoItem__description">
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.channelTitle}</p>
			</div>
		</div>
	);
};

export default VideoItem
