import React, { Component } from "react";
import AppTitle from "../../components/AppTitle/AppTitle";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import VideoList from "../../components/VideoList/VideoList";
import youtube from "../../api/youtube.js";
import "./Home.css";

class Home extends Component {
  // state
  state = { videos: [], selectedVideo: null }
  
	// handlers
	onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", { params: { q: searchTerm } });
    this.setState({ videos: response.data.items });
  };
  
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }
	// Component Render
	render() {
		return (
			<div className="home">
				<AppTitle title="Welcome to Our YouTube Page" />
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <VideoDetail />
        <VideoList videos={this.state.videos} onVideoSelect = {this.onVideoSelect} />
			</div>
		);
	}
}

export default Home;
