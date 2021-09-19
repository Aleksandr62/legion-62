import { MainTemplate, Header, LeftBar } from "../components";

export const AdminPanel = () => {
  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <div>CMS</div>
    </MainTemplate>
  );
};
