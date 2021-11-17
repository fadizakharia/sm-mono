import { Search } from "@mui/icons-material";
import {
  AppBar,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { findUser } from "../api/friends";
import SearchResult from "../components/SearchResult/SearchResult";
import Spinner from "../components/Spinner/Spinner";
const Results = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<user[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSearch = () => {
    setLoading(true);
    if (search.length > 0) {
      findUser(search)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setSearchResults(res.data.users);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };
  return (
    <React.Fragment>
      {loading && <Spinner />}
      <AppBar
        sx={{
          marginTop: "64px",
        }}
        color="secondary"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <TextField
            value={search}
            label="search friends..."
            onChange={(ev) => setSearch(ev.target.value)}
          />
          <IconButton onClick={handleSearch}>
            <Search />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        sx={{ marginTop: "150px", marginBottom: "50px" }}
        container
        spacing={3}
      >
        {searchResults.length > 0 ? (
          searchResults.map((search) => (
            <SearchResult key={search.id} user={search} />
          ))
        ) : (
          <Typography sx={{ margin: "100px auto" }} align="center" variant="h6">
            No search results found!
          </Typography>
        )}
      </Grid>
    </React.Fragment>
  );
};
export default Results;
