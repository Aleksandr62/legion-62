import {
  Home as HomeIcon,
  BusinessCenter as BCIcon,
  NewReleases as NewsIcon,
  Info as InfoIcon,
  BuildRounded as BuildIcon
} from "@material-ui/icons";
import {
  Home,
  News,
  Login,
  Register,
  Profile,
  Service,
  AdminPanel,
  About,
  Page404
} from "../pages";

const List = [
  {
    name: "Главная",
    path: "/",
    icon: <HomeIcon />,
    component: Home,
    exact: true,
    meta: {
      routes: true,
      header: false,
      cms: false,
      menuIcons: false,
      authRequire: false
    }
  },
  {
    name: "Главная",
    path: "/home",
    icon: <HomeIcon />,
    component: Home,
    exact: true,
    meta: {
      routes: true,
      header: true,
      cms: true,
      menuIcons: true,
      authRequire: false
    }
  },
  {
    name: "Сервис",
    path: "/service",
    icon: <BuildIcon />,
    component: Service,
    exact: false,
    meta: {
      routes: true,
      header: true,
      cms: true,
      menuIcons: true,
      authRequire: true
    }
  },
  {
    name: "Новости",
    path: "/news",
    icon: <NewsIcon />,
    component: News,
    meta: {
      routes: true,
      header: true,
      cms: true,
      menuIcons: true
    }
  },
  {
    name: "Новости",
    path: "/news/:idNew",
    component: News,
    exact: false,
    meta: { routes: true, authRequire: false, isAdmin: true }
  },
  {
    name: "О компании",
    path: "/about",
    icon: <InfoIcon />,
    component: About,
    exact: false,
    meta: {
      routes: true,
      header: true,
      cms: true,
      menuIcons: true,
      authRequire: false
    }
  },
  {
    name: "Профиль",
    path: "/profile/:id",
    component: Profile,
    exact: false,
    meta: {
      routes: true,
      header: false,
      cms: false,
      menuIcons: false,
      authRequire: true
    }
  },
  {
    name: "Авторизация",
    path: "/login",
    component: Login,
    exact: false,
    meta: {
      routes: true,
      header: false,
      cms: false,
      menuIcons: false,
      authRequire: false
    }
  },
  {
    name: "Регистрация",
    path: "/register",
    component: Register,
    exact: false,
    meta: {
      routes: true,
      header: false,
      cms: false,
      menuIcons: false,
      authRequire: false
    }
  },
  {
    name: "Панель управления",
    path: "/cms",
    component: AdminPanel,
    exact: true,
    meta: { routes: true, authRequire: true, isAdmin: true }
  },
  {
    name: "Страница не найдена",
    path: "*",
    component: Page404,
    exact: false,
    meta: { routes: true, authRequire: false }
  }
];

export const selectList = (selector) => {
  return List.reduce((arr, item) => {
    if (selector && item.meta[selector]) arr = [...arr, item];
    return arr;
  }, []);
};
