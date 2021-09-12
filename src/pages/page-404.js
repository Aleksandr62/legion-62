import { MainTemplate, Header, LeftBar } from "../components";

export const Page404 = () => {
  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <div>Page404</div>
    </MainTemplate>
  );
};
