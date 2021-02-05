import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "400px",
    minHeight: "70vh",
    borderTop: "10px lightBlue solid",
    margin: "100px auto",
    background: "white",
    borderRadius: "10px",
    boxShadow: "2px 5px 5px rgba(0,0,0,0.5)",
    "& > * + *": {
      margin: "50px 50px",
    },
  },
  form: {
    margin: "50px 50px",
  },
  input_field: {
    width: "60%",
    margin: "auto",
  },
  btn: {
    height: "40px",
    backgroundColor: "lightBlue",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "lightBlue",
      color: "white",
    },
  },
}));

export default useStyles;
