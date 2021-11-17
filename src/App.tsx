import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Layout } from "./components/Layout/Layout";
import Landing from "./pages/Landing";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { current } from "./api/auth";
import { setUser } from "./store/actions/user";
import Newsfeed from "./pages/Newsfeed";
import Profile from "./pages/Profile";
import Results from "./pages/Results";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    current()
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          dispatch(setUser(res.data.user));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);
  const user = useSelector<user, user>((user) => user);
  const isLoggedIn = Boolean(user.email.length > 0);
  console.log(isLoggedIn);

  const RoutesRenderd = isLoggedIn ? (
    <Routes>
      <Route path="/search" element={<Results />} />
      <Route path="/user" element={<Profile />} />
      <Route path="/" element={<Newsfeed />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
  return (
    <div className="App">
      <Layout>{RoutesRenderd}</Layout>
    </div>
  );
}

export default App;
