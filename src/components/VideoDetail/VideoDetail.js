import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
    // declaring the src of the iframe
	const videoSrc = `http://www.youtube.com/embed/${video?.id.videoId}`;
	return (
		<div className="videoDetail">
			<div className="videoThumbnail">
				<iframe
					src={videoSrc}
					frameBorder="no"
					scrolling="no"
					allowtransparency={true}
					allowFullScreen={true}
					title={video?.snippet.title}></iframe>
			</div>
			<div className="videoDetailDescription">
				<h4> {video?.snippet.title}</h4>
				<p>{video?.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
