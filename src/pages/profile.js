import { useSelector } from "react-redux";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { MainTemplate, Header, LeftBar, LoginComp } from "../components";

export const Profile = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <Card elevation={0}>
        <CardHeader title="Профиль" />
        <CardContent>
          <Profile user={user} />
        </CardContent>
      </Card>
    </MainTemplate>
  );
};
