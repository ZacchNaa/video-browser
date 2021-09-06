import axios from "axios";

// apikey
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// axios configuration
export default axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});