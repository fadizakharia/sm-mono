import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../api/posts";

export default function PostForm() {
  const [content, setContent] = useState<string>("");
  const user = useSelector<user, user>((user) => user);
  const handleSubmitPost = () => {
    if (content.length > 0) {
      addPost(content)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Box sx={{ padding: "20px", marginTop: "70px" }}>
      <TextField
        multiline
        rows={8}
        fullWidth
        value={content}
        label="let your friends know what you are thinking!"
        onChange={(ev) => setContent(ev.target.value)}
      />
      <Box sx={{ textAlign: "end", marginTop: "10px" }}>
        <Button onClick={handleSubmitPost} variant="text">
          post
        </Button>
      </Box>
    </Box>
  );
}
