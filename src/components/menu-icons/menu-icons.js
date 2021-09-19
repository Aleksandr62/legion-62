import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { selectList } from "../../router";
import classnames from "classnames";
import styles from "./menu-icons.module.css";

export const MenuIcons = ({ selector = "menuIcons" }) => {
  const menuList = selectList(selector);

  const handleClickMenuItem = () => {
    return;
  };
  return (
    <nav className={classnames(styles.menu)}>
      {menuList.map((menuItem, idx) => (
        <Link key={idx} to={menuItem.path}>
          <IconButton
            edge="start"
            color="inherit"
            title={menuItem.name}
            aria-label="menu"
            onClick={handleClickMenuItem}
          >
            {menuItem.icon}
          </IconButton>
        </Link>
      ))}
    </nav>
  );
};
