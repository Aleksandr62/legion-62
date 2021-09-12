import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { menuSelector } from "../../store/menu";
import classnames from "classnames";
import styles from "./menu.module.css";

export const Menu = ({ selector = "header" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuList = useSelector(menuSelector(selector));

  return (
    <div className={styles.menuBox}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon />
      </IconButton>
      <div
        open={menuOpen}
        className={styles.filter}
        onClick={() => setMenuOpen(false)}
      ></div>
      <nav open={menuOpen} className={classnames(styles.menu)}>
        <button
          className={styles.menuClose}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#10006;
        </button>
        {menuList.map((menuItem, idx) => (
          <Link key={idx} to={menuItem.path} onClick={() => setMenuOpen(false)}>
            <div className={styles.menuItem}>{menuItem.name}</div>
          </Link>
        ))}
      </nav>
    </div>
  );
};
