import { AccountCircle, Search } from "@mui/icons-material";
import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
interface INavbarMobile {
  open: boolean;
  openHandler: (state: boolean) => void;
}
const NavbarMobile: React.FC<INavbarMobile> = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpen(props.open);
    return () => {};
  }, [props.open]);
  return (
    <Box
      sx={(theme) => {
        return {
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
        };
      }}
    >
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={(ev) => props.openHandler(false)}
        onOpen={(ev) => props.openHandler(true)}
      >
        <List>
          <Divider sx={{ marginTop: "64px" }} />
          <ListItem button key={"profile"} onClick={(ev) => navigate("/user")}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
          <Divider variant="middle" />
          <ListItem button key={"search"} onClick={(ev) => navigate("/search")}>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText primary={"Find Friends"} />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Box>
  );
};
export default NavbarMobile;
