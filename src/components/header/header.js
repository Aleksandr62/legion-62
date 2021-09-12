import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import { AccountCircleOutlined, AccountCircle } from "@material-ui/icons";
import { useState } from "react";
import { ModalWindow, LoginComp, MenuIcons } from "../../components";
import { Menu } from "../menu";
import styles from "./header.module.css";

const useStyles = makeStyles({
  colorPrimary: {
    backgroundColor: "#ef6817",
  },
});

// #21201f, #727271, #5f605d, #383838, /// #f03d33, #444444, #252525, #d5d5d3
export const Header = ({ isAuth = false }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickAuth = () => {
    if (!isAuth) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <AppBar position="fixed" className={classes.colorPrimary}>
        <Toolbar variant="dense">
          <Menu />

          <MenuIcons />

          <IconButton color="inherit" onClick={handleClickAuth}>
            {isAuth ? <AccountCircleOutlined /> : <AccountCircle />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {open && (
        <ModalWindow
          hide={handleClose}
          title="Авторизация"
          btnConfirm={"ОК"}
          btnCancel={"Отмена"}>
          {LoginComp}
        </ModalWindow>
      )}
    </header>
  );
};
