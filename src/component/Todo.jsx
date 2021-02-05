import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./todo";

function Todo() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, {input, id: new Date().getTime().toString()}]);
    setInput("");
  };

  console.log(list)

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          type="text"
          label="Enter a todo"
          name="todo"
          className={classes.input_field}
          value={input}
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
    </div>
  );
}

export default Todo;
