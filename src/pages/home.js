import { MainTemplate, Header, LeftBar } from "../components";

export const Home = () => {
  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}></MainTemplate>
  );
};
