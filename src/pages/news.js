import { MainTemplate, Header, LeftBar, NewsComp } from "../components";

export const News = () => {
  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <NewsComp />
    </MainTemplate>
  );
};
