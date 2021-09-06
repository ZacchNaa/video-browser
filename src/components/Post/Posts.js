import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [post, setPost] = useState("This is my init post")

  useEffect(() => {
   setPost("My post after render")
  }, [])
  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default Posts;
