import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core/";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const Snackbars = ({
  show = false,
  severity = "warning",
  message = "Страница не существует!",
  delay = 0,
  position = { vertical: "bottom", horizontal: "center" }
}) => {
  const [visible, setVisible] = useState(show);

  const handleClose = (e, reason) => {
    console.log(reason);
    if (reason === "clickaway") return;
    setVisible(false);
  };

  return (
    <Snackbar
      open={visible}
      autoHideDuration={delay ? delay : 6000}
      onClose={handleClose}
      anchorOrigin={{ ...position }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
