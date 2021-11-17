import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
interface IFriendPosts {
  posts: Array<post>;
}
const Posts: React.FC<IFriendPosts> = ({ posts }) => {
  return (
    <Box>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      ;
    </Box>
  );
};
export default Posts;
