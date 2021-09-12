import { MainTemplate, Header, LeftBar } from "../components";

export const News = () => {
  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <div>News</div>
    </MainTemplate>
  );
};
