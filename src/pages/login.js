import { useDispatch } from "react-redux";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { MainTemplate, Header, LeftBar, LoginComp } from "../components";
import { PROFILE_GET_SUCCESS } from "../store/profile";
import { get } from "../api";

export const Login = () => {
  const dispatch = useDispatch();

  const handleConfirm = ({ email, password }) => {
    console.log("Login-handleConfirm-11", email, password);
    get("", email, password).then((data) => {
      dispatch({ type: PROFILE_GET_SUCCESS, payload: data });
      localStorage.setItem("legionEmail", data.email);
      localStorage.setItem("legionName", data.name);
      console.log("Login-handleConfirm-13", data);
    }); // `user/${email}&${password}`
  };

  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <Card elevation={0}>
        <CardHeader title="Авторизация" />
        <CardContent>
          <LoginComp btnConfirm={"Войти"} handleConfirm={handleConfirm} />
        </CardContent>
      </Card>
    </MainTemplate>
  );
};
