import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
interface IFriendPost {
  post: post;
}
const Post: React.FC<IFriendPost> = ({ post }) => {
  const user = useSelector<user, user>((user) => user);
  return (
    <Card sx={{ padding: "20px", marginTop: "20px" }}>
      <CardHeader
        title={post.author.first_name + " " + post.author.last_name}
        subheader={
          moment().diff(moment(post.createdAt), "days") == 0
            ? moment().diff(moment(post.createdAt), "hours") == 0
              ? moment().diff(moment(post.createdAt), "minutes") +
                " minutes ago"
              : moment().diff(moment(post.createdAt), "hours") + " hours ago"
            : moment().diff(moment(post.createdAt), "days") + " days ago"
        }
      />
      <CardContent>{post.content}</CardContent>
      {post.author.id === user.id && (
        <CardActions sx={{ justifyContent: "end" }}>
          <Button color="primary" variant="text">
            Edit
          </Button>
          <Button variant="contained">Delete</Button>
        </CardActions>
      )}
    </Card>
  );
};
export default Post;
