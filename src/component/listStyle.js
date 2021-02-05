import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(()=>({
    list: {
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        border: "2px solid lightBlue",
        borderRadius: "5px",
        padding: "0 20px",
        marginBottom: "20px"
    }
}))

export default useStyles;