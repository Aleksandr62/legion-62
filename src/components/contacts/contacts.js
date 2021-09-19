import { useState } from "react";
import { useSelector } from "react-redux";
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
import { MapContact } from "./map-contact";
import { ListItems } from "../list-items";
import styles from "./contacts.module.css";

export const Contacts = () => {
  const [expanded, setExpanded] = useState(false);

  const { company } = useSelector((state) => state.company);

  const handleChange = (panel) => (e, isExpanded) => {
    if (panel.meta.expand) setExpanded(isExpanded ? panel.unit : false);
  };

  return (
    <Card elevation={0}>
      <CardHeader title={company[0].titleUnit} />
      <CardContent>
        {company.map((item, idx) => {
          return (
            item.meta.about && (
              <Accordion
                key={idx}
                expanded={item.meta.expand ? expanded === item.unit : false}
                onChange={handleChange(item)}
              >
                <AccordionSummary
                  expandIcon={item.meta.expand && <ExpandMore />}
                  aria-controls={`${item.unit}bh-content`}
                  id={`${item.unit}bh-header`}
                >
                  {item.titleUnit}
                  <div className={styles.subContent}>
                    {!item.meta.expand && item.contentUnit}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  {typeof item.contentUnit !== "object" ? (
                    item.contentUnit
                  ) : (
                    <ListItems list={item.contentUnit} />
                  )}
                </AccordionDetails>
              </Accordion>
            )
          );
        })}
      </CardContent>
      <CardMedia>
        <MapContact title={company[0].title} />
      </CardMedia>
    </Card>
  );
};
