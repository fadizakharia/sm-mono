import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { current } from "../api/auth";
import { addFriend, getUser } from "../api/friends";
import { getUserPost } from "../api/posts";
import Posts from "../components/FriendPosts/Posts";
import Spinner from "../components/Spinner/Spinner";
interface iProfile {
  friendId?: string;
}
const Profile: React.FC<iProfile> = () => {
  console.log("im here");
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<post>>();
  const [addable, setAddable] = useState<boolean>(false);
  const [user, setUser] = useState<user>();
  const handleAddFriend = () => {
    addFriend(user!.id)
      .then((res) => {
        if (res.status === 200) {
          setAddable(true);
        }
      })
      .catch((err) => {});
  };
  useEffect(() => {
    setLoading(true);
    const userId = searchParams.get("userId");
    if (userId) {
      getUser(userId)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setUser(res.data.user);
            setAddable(true);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    } else {
      current()
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setUser(res.data.user);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }

    return () => {};
  }, []);
  useEffect(() => {
    setLoading(true);
    if (user) {
      getUserPost(user.id)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setPosts(res.data.posts);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
    return () => {};
  }, [user]);
  return (
    <React.Fragment>
      {loading && <Spinner />}
      <Box
        sx={{
          width: "100%",
          minHeight: "500px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar
            sx={{
              marginTop: "100px",
              width: "200px",
              height: "200px",
              overflow: "visible",
            }}
          />
          <Typography variant="h5">
            {user?.first_name + " " + user?.last_name}
          </Typography>
          <Typography variant="caption">{user?.email}</Typography>
          {addable && (
            <Button onClick={handleAddFriend} variant="outlined">
              Add Friend
            </Button>
          )}
        </Box>
      </Box>
      {posts ? (
        <Posts posts={posts} />
      ) : (
        <Typography variant="caption">user does not have any posts!</Typography>
      )}
    </React.Fragment>
  );
};
export default Profile;
