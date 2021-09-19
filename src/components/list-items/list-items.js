import { List, ListItem, ListItemIcon } from "@material-ui/core";
import { Phone, Email } from "@material-ui/icons";

export const ListItems = ({ list }) => {
  const phones = list?.phones ? list.phones : [];
  const emails = list?.emails?.main ? list.emails.main : [];

  return (
    <List>
      {phones &&
        phones.map((item, idx) => (
          <ListItem dense key={idx}>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            {item}
          </ListItem>
        ))}
      {emails && Array.isArray(emails)
        ? emails.map((item, idx) => (
            <ListItem dense key={idx}>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              {item}
            </ListItem>
          ))
        : emails && (
            <ListItem dense>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              {emails}
            </ListItem>
          )}
    </List>
  );
};
