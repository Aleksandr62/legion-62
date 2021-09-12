import { Route } from "react-router-dom";
import { Login } from "../pages";

export const PrivateRouter = ({ isAuth, exact, path, component, meta }) => {
  return (
    (isAuth && (
      <Route path={path} exact={exact} component={component} meta={meta} />
    )) || <Login />
  );
};
