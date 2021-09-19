import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const newData = {
  id: "",
  title: "",
  description: "",
  imageList: [],
  created_at: ""
};

export const NewComp = ({ newItem }) => {
  const [expand, setExpand] = useState(false);

  return (
    /*     <Card elevation={0}>
      <CardHeader title={newItem.title} />
      <CardContent> */
    <Accordion
      expanded={expand ?? false} // поправить на выбор развернутой новости
      onChange={() => setExpand(!expand)}
    >
      <AccordionSummary
        expandIcon={expand && <ExpandMore />}
        aria-controls={`${newItem.id}bh-content`}
        id={`${newItem.id}bh-header`}
      >
        {newItem.title}
        <div>{!expand && newItem.shortDescription}</div>
      </AccordionSummary>
      <AccordionDetails>{newItem.description}</AccordionDetails>
    </Accordion>
    /*       </CardContent>
      <CardMedia>Веселые картинки</CardMedia>
    </Card> */
  );
};
