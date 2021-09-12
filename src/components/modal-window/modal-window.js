import { Dialog, DialogTitle } from "@material-ui/core";

export const ModalWindow = ({ children: Component, hide, title, ...rest }) => {
  return (
    <Dialog
      onClose={hide}
      aria-labelledby="simple-dialog-title"
      open
      scroll="paper"
    >
      <DialogTitle>{title}</DialogTitle>

      <Component hide={hide} {...rest} />
    </Dialog>
  );
};
