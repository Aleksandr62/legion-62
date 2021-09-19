import { useSelector } from "react-redux";
import { NewComp } from "./new-comp";

const selectorNews = () => (state) => state.news;

export const NewsComp = () => {
  const { newsList } = useSelector(selectorNews());

  return (
    <div>
      {newsList.map((item, idx) => (
        <NewComp key={idx} newItem={item} />
      ))}
    </div>
  );
};
