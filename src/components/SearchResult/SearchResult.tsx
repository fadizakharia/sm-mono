import { Add, Delete } from "@mui/icons-material";
import { Grid, Card, CardHeader, Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addFriend, deleteFriend } from "../../api/friends";
interface ISearchResult {
  user: user;
}
const SearchResult: React.FC<ISearchResult> = (props) => {
  const navigate = useNavigate();
  const [friend, setFriend] = useState<boolean>(false);
  const user = useSelector<user, user>((user) => user);
  const handleAddition = (userId: string) => {
    addFriend(userId)
      .then((res) => {
        if (res.status === 200) {
          setFriend(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeletion = (userId: string) => {
    deleteFriend(userId)
      .then((res) => {
        if (res.status === 200) {
          setFriend(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(user.friends);

    for (let el of user.friends!) {
      if (el.id === props.user.id) {
        setFriend(true);
      }
    }

    return () => {};
  }, [user, JSON.stringify(user.friends), JSON.stringify(props.user)]);
  return (
    <Grid xs={12} item>
      <Card
        onClick={() =>
          navigate(`/user/?userId=${props.user.id}`, { replace: true })
        }
      >
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={
            friend ? (
              <IconButton onClick={() => handleDeletion(props.user.id)}>
                <Delete />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleAddition(props.user.id)}>
                <Add />
              </IconButton>
            )
          }
          title={props.user.first_name + " " + props.user.last_name}
          subheader={props.user.email}
        />
      </Card>
    </Grid>
  );
};
export default SearchResult;
