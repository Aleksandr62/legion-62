import { useSelector } from "react-redux";
import { MainTemplate, Header, LeftBar, Contacts } from "../components";

export const About = () => {
  const { company } = useSelector((state) => state.company);
  return (
    <MainTemplate header={<Header />} leftBar={<LeftBar />}>
      <Contacts {...company} />
    </MainTemplate>
  );
};
