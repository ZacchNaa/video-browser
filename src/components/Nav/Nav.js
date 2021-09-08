import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
		<div className="nav">
			<div className="wrapLogo">
				<span className="logo">U</span>
				<h2>U-myTube</h2>
			</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/About">About</Link>
				</li>
				<li>
					<Link to="/Wikis">Wiki Search</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
