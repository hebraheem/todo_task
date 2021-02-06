import React, { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

const Snack = ({ severity, message }) => {
  const [open, setOpen] = useState(true);
  const vertical = "top";
  const horizontal = "center";

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Snack;
