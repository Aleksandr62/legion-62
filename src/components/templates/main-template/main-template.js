import { Grid, Hidden } from "@material-ui/core";
import styles from "./main-template.module.css";

export const MainTemplate = ({ header, leftBar, children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {header}
      </Grid>
      <Grid container className={styles.container}>
        <Hidden xsDown>
          <Grid item sm={3}>
            <aside className={styles.leftBar}>{leftBar}</aside>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9}>
          <section className={styles.content}>{children}</section>
        </Grid>
      </Grid>
    </Grid>
  );
};
