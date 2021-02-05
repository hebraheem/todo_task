import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./listStyle";

const List = ({ list, handleClear, handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {list.map((todo) => {
        return (
          <div key={todo.id} className={classes.list}>
            <h3>{todo.input}</h3>
            <Button onClick={() => handleClick(todo.id)}>X</Button>
          </div>
        );
      })}
      <Button variant="outlined" size="small" onClick={handleClear}>
        Clear Todo
      </Button>
    </div>
  );
};

export default List;
