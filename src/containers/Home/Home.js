import React, { Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import VideoList from "../../components/VideoList/VideoList";
import youtube from "../../api/youtube.js";
import "./Home.css";

class Home extends Component {
	// state
	state = { videos: [], selectedVideo: null };

	// handling defaults: loading some videos when the component mounts
	componentDidMount() {
		//make a default search
		this.onSearchTermSubmit("reactjs");
	}

	// handlers
	onSearchTermSubmit = async (searchTerm) => {
		const response = await youtube.get("/search", {
			params: { q: searchTerm },
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
			// make the first video of every search, the selected video
		});
	};

	onVideoSelect = (video) => {
		// update the state with the selected video of the user
		this.setState({ selectedVideo: video });
	};
	// Component Render
	render() {
		return (
			<div className="home">
				<SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
				<div className="videoContent">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList
						videos={this.state.videos}
						onVideoSelect={this.onVideoSelect}
					/>
				</div>
			</div>
		);
	}
}

export default Home;
