import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
    // state declaration
    state = { searchTerm: "" };
    
    // handlers
    onInputChange = (e) => {
        // update state searchTerm
        this.setState({searchTerm: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchTermSubmit(this.state.searchTerm);
    }

// component Render
	render() {
		return (
			<div className="searchbar">
				<form className="searchbar__form" onSubmit={this.onFormSubmit}>
					<div className="searchbar__form__field">
						<input
							type="text"
							value={this.state.searchTerm}
                            placeholder="Video Search"
                            onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
