import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid lightBlue",
    borderRadius: "5px",
    padding: "0 10px",
    marginBottom: "20px",
    height: "40px",
  },
  wrapper: {
    overflowY: "scroll",
    height: "350px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  text: {
    overflowX: "scroll",
    width: "120px",
    height: "30px",
    paddingTop:"10px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

export default useStyles;