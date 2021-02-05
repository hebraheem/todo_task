import { TextField, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import useStyles from "./todoStyle";
import List from "./List";
import Snack from "./Snack.jsx";

function Todo() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState({ msg: "", error: "", show: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return setError({
        msg: "connot add an empty field",
        error: "error",
        show: true,
      });
    }
    setList([...list, { input, id: new Date().getTime().toString() }]);
    setInput("");
  };

    const handleClear = () => {
      setList("");
    };

  return (
    <div className={classes.wrapper}>
      {error.show && <Snack severity={error.status} message={error.message} />}
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          type="text"
          label="Enter a todo"
          name="todo"
          className={classes.input_field}
          value={input}
          variant="outlined"
          size="small"
          autoComplete="false"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={classes.btn}>Add Todo</button>
      </form>
      <List list={list} setList={setList} handleClear={handleClear} />
    </div>
  );
}

export default Todo;
