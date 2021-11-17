import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import Posts from "../components/FriendPosts/Posts";
import PostForm from "../components/PostForm/PostForm";
import Spinner from "../components/Spinner/Spinner";

export default function Newsfeed() {
  const [posts, setPosts] = useState<Array<post>>([]);
  const [postsNotFound, setPostsNotFound] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((res) => {
        console.log(res.data.posts);
        setLoading(false);
        if (res.status === 200) {
          setPosts(res.data.posts);
          setPostsNotFound(false);
        }
        if (res.status === 404) {
          setPostsNotFound(true);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    return () => {};
  }, []);

  return (
    <React.Fragment>
      {loading && <Spinner />}
      <PostForm />
      <Box
        sx={{
          backgroundColor: "black",
          height: "3px",
          opacity: "0.1",
          width: "100%",
          marginBottom: "10px",
        }}
      />
      <Posts posts={posts} />
    </React.Fragment>
  );
}
