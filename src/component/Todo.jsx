import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./todoStyle";
import List from "./List";
import Snack from "./Snack.jsx";

function Todo() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIseditting] = useState(false);
  const [editId, setEditId] = useState("");
  const [error, setError] = useState({ msg: "", err: "", show: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setError({
        msg: "cannot add an empty field",
        err: "error",
        show: true,
      });
    } else if (input && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) return { ...item, input };
        })
      );
      setInput("");
      setIseditting(false);
    } else {
      setList([...list, { input, id: new Date().getTime().toString() }]);
      setError({ msg: "Todo added", err: "success", show: true });
      setInput("");
    }
  };

  const handleClick = (id) => {
    const filter = list.filter((list) => list.id !== id);
    setList(filter);
    setError({ msg: "Todo deleted", err: "error", show: true });
  };

  const handleClear = () => {
    setList([]);
    setError({ msg: "Todo cleared", err: "error", show: true });
  };

  const handleEdit = (id) => {
    let editList = list.find((list) => list.id === id);
    setIseditting(true);
    setEditId(id);
    setInput(editList.input);
  };

  const showAlert = (msg = "", err = "", show = false) => {
    setError({ msg, err, show });
  };

  return (
    <>
      <div className={classes.wrapper}>
        {error.show && <Snack {...error} removeAlert={showAlert} list={list} />}
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
          <button className={classes.btn}>
            {isEditing ? "Edit Todo" : "Add Todo"}
          </button>
        </form>
        {list.length > 0 && (
          <List
            list={list}
            setList={setList}
            handleClear={handleClear}
            handleClick={handleClick}
            handleEdit={handleEdit}
          />
        )}
      </div>
    </>
  );
}

export default Todo;
