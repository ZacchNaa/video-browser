import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Post from "./components/Post/Post";
import Wikis from "./containers/Wikis/Wikis";
function App() {
  return (
		<BrowserRouter>
			<div className="app">
				<Nav />
				<Route exact path="/" component={Home} />
				<Route path="/About" component={About} />
				<Route path="/Wikis" component={Wikis} />
				<Route path="/About/:id" component={Post} />
			</div>
		</BrowserRouter>
	);
}

export default App;
