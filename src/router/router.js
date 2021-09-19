import { Route, Switch } from "react-router-dom";
import { PrivateRouter } from "./private-router";
import { selectList } from "./list-routes";

export const MainRouter = ({ isAuth = false }) => {
  const routes = selectList("routes");

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
            isAuth={isAuth}
          />
        );
      })}
    </Switch>
  );
};
