import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./listStyle";

const List = ({ list, handleClear, handleClick, handleEdit }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {list.map((todo) => {
        return (
          <div key={todo.id} className={classes.list}>
            <div>
              <h3>{todo.input}</h3>
            </div>
            <div>
              <Button onClick={() => handleEdit(todo.id)}>E</Button>
              <Button onClick={() => handleClick(todo.id)}>X</Button>
            </div>
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
