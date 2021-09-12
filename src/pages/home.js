import { MainTemplate, Header, LeftBar, DateTimePicker, TimePicker } from "../components";

export const Home = () => {
  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <DateTimePicker />
      <TimePicker min={"12:00"} max={"15:00"} step={"30"}/>
    </MainTemplate>
  );
};
