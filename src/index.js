import ReactDOM from "react-dom";
import { StrictMode, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { MainRouter } from "./router";
import { store } from "./store";

const App = () => {
  const { user } = useSelector((state) => state.profile);
  const [isAuth, setIsAuth] = useState(!Boolean(user));

  useEffect(() => {
    setIsAuth((state) => !!user.email);
  }, [user, isAuth]);

  return (
    <BrowserRouter>
      <MainRouter isAuth={isAuth} />
    </BrowserRouter>
  );
};

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  root
);
