import { useDispatch } from "react-redux";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { MainTemplate, Header, LeftBar, LoginComp } from "../components";
import { PROFILE_GET_SUCCESS } from "../store/profile";
import { get } from "../api";

export const Login = () => {
  const dispatch = useDispatch();

  const handleConfirm = ({ email, password }) => {
    const { data } = get("", email, password); // `user/${email}&${password}`
    dispatch({ type: PROFILE_GET_SUCCESS, payload: data });
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
