import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./todoStyle";
import List from "./List";

function Todo() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return alert("cannot add an empty field")
    }
    setList([...list, { input, id: new Date().getTime().toString() }]);
    setInput("");
  };
  
    const handleClick = (id) => {
      const filter = list.filter((list) => list.id !== id);
      setList(filter);
    };

    const handleClear = () => {
      setList([]);
    };

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
          size="small"
          autoComplete="false"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={classes.btn}>Add Todo</button>
      </form>
      <List
        list={list}
        setList={setList}
        handleClear={handleClear}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Todo;
