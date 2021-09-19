import { Grid, Hidden } from "@material-ui/core";
import styles from "./content-editor.module.css";

export const ContentEditor = ({ content }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  );
};
