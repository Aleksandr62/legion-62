import { Route, Switch } from "react-router-dom";
import { PrivateRouter } from "./private-router";
import {
  Home,
  News,
  Login,
  Register,
  Comerce,
  AdminPanel,
  About,
  Page404
} from "../pages";

const routes = [
  {
    path: ["/", "/home"],
    component: Home,
    exact: true,
    meta: { authRequire: false }
  },
  {
    path: "/comerce",
    component: Comerce,
    exact: false,
    meta: { authRequire: true }
  },
  {
    path: "/about",
    component: About,
    exact: false,
    meta: { authRequire: false }
  },
  {
    path: "/login",
    component: Login,
    exact: false,
    meta: { authRequire: false }
  },
  {
    path: "/register",
    component: Register,
    exact: false,
    meta: { authRequire: false }
  },
  {
    path: "/cms",
    component: AdminPanel,
    exact: true,
    meta: { authRequire: true, isAdmin: true }
  },
  {
    path: "/cms/news",
    component: News,
    exact: false,
    meta: { authRequire: true, isAdmin: true }
  },
  {
    path: "/cms/news/:idNew",
    component: News,
    exact: false,
    meta: { authRequire: true, isAdmin: true }
  },
  {
    path: "*",
    component: Page404,
    exact: false,
    meta: { authRequire: false }
  }
];

export const MainRouter = ({ isAuth = false }) => {
  return (
    <Switch>
      {routes.map((route, idx) => {
        return route.meta.authRequire ? (
          <PrivateRouter
            key={idx}
            exact={route.exact}
            isAuth={isAuth}
            path={route.path}
            component={route.component}
            meta={route.meta}
          />
        ) : (
          <Route
            key={idx}
            exact={route.exact}
            path={route.path}
            component={route.component}
            meta={route.meta}
          />
        );
      })}
    </Switch>
  );
};
