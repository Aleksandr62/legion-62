import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import { AccountCircleOutlined, AccountCircle } from "@material-ui/icons";
import { fbSignOut } from "../../api/auth";
import { ModalWindow, LoginComp, MenuIcons } from "../../components";
import { Menu } from "../menu";
import styles from "./header.module.css";

const useStyles = makeStyles({
  colorPrimary: {
    backgroundColor: "#ef6817"
  }
});

const selectorProfile = () => (state) => state.profile;

// #21201f, #727271, #5f605d, #383838, /// #f03d33, #444444, #252525, #d5d5d3
export const Header = () => {
  const { user } = useSelector(selectorProfile());
  const [isAuth, setIsAuth] = useState(!Boolean(user));

  useEffect(() => {
    setIsAuth(!!user.email);
    console.log("Header-useEffect-22", isAuth);
  }, [user, isAuth]);

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickAuth = () => {
    setOpen(!open);
  };

  const handleConfirm = (props) => {
    console.log("Header-handleConfirm-24", props);
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSignOut = () => {
    fbSignOut();
    handleClose();
  };

  return (
    <header>
      <AppBar position="fixed" className={classes.colorPrimary}>
        <Toolbar variant="dense">
          <Menu />

          <MenuIcons />
          <div className={styles.menuProfileBox}>
            <IconButton color="inherit" onClick={handleClickAuth}>
              {isAuth ? <AccountCircleOutlined /> : <AccountCircle />}
            </IconButton>
            {open &&
              (!isAuth ? (
                <ModalWindow
                  hide={handleClose}
                  title="Авторизация"
                  btnConfirm={"ОК"}
                  btnCancel={"Отмена"}
                  handleConfirm={handleConfirm}
                >
                  {LoginComp}
                </ModalWindow>
              ) : (
                <div
                  className={styles.menuProfile}
                  onClick={handleClickSignOut}
                >
                  Выйти
                </div>
              ))}
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};
