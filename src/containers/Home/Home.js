import React, { Component } from "react";
import AppTitle from "../../components/AppTitle/AppTitle";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoList from "../../components/VideoList/VideoList";
import youtube from "../../api/youtube.js";
import "./Home.css";

class Home extends Component {
  // state
  state = {videos: []}
	// handlers
	onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", { params: { q: searchTerm } });
    this.setState({ videos: response.data.items });
	};
	// Component Render
	render() {
		return (
			<div>
				<AppTitle title="Welcome to Our YouTube Page" />
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default Home;
