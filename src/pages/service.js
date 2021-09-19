import { MainTemplate, Header, LeftBar, DateTimePicker } from "../components";

export const Service = () => {
  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <DateTimePicker />
    </MainTemplate>
  );
};
