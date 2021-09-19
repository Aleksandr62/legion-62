import ReactDOM from "react-dom";
import { StrictMode, useEffect, useState, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { MainRouter } from "./router";
import { PROFILE_GET_SUCCESS } from "./store/profile";
import { store } from "./store";

const selectorProfile = (state) => state.profile;

const App = () => {
  const dispatch = useDispatch();
  useMemo(() => {
    if (localStorage.legionEmail)
      dispatch({
        type: PROFILE_GET_SUCCESS,
        payload: {
          name: localStorage.legionName,
          email: localStorage.legionEmail,
          role: ""
        }
      });
  }, [dispatch]);

  const { user } = useSelector(selectorProfile);
  const [isAuth, setIsAuth] = useState(!Boolean(user));

  useEffect(() => {
    setIsAuth(!!user.email);
    console.log("App-useEffect-14", isAuth);
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
