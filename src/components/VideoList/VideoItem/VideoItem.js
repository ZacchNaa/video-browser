import React from 'react'
import "./VideoItem.css"

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className="videoItem" onClick={() => onVideoSelect(video)}>
			<img
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			{video.snippet.title}
		</div>
	);
};

export default VideoItem
