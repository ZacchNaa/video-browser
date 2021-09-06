import React, {createRef, useEffect} from "react";
import AppTitle from "../AppTitle/AppTitle";

const Post = ({post}) => {
  const selectH2 = createRef() //selecting element on the dom in react

  useEffect(() => {
		console.log(selectH2);
	}, [selectH2]);

  return (
		<div>
			<AppTitle title="Post" />
			<h2 ref={selectH2}>
				Post <span>Title</span>
			</h2>
		</div>
	);
};

export default Post;
