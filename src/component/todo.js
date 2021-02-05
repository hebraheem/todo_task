import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((themes) => ({
  wrapper: {
    maxWidth: "400px",
    minHeight: "70vh",
    borderTop: "10px lightBlue solid",
    margin: "100px auto",
    background: "white",
    borderRadius: "10px",
    boxShadow: "2px 5px 5px rgba(0,0,0,0.5)",
  },
  form: {
    margin: "50px 50px",
  },
  input_field: {
    width: "60%",
    margin: "auto",
    height: "30px",
  },
}));

export default useStyles;
