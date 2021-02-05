import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, {useState} from "react";

const Snack = ({ severity, message }) => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClick={handleClose} severity ="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Snack;
