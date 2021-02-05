import { Button } from "@material-ui/core";
import React from 'react'
import useStyles from './listStyle'

const List = ({ list, setList, handleClear }) => {
  const classes = useStyles();
  const handleClick = (id) => {
    const filter = list.filter((list) => list.id !== id);
    setList(filter);
  };

  return (
    <div>
      {list.map((todo) => {
        return (
          <div key={todo.id} className={classes.list}>
            <h3>{todo.input}</h3>
            <Button onClick={() => handleClick(todo.id)}>X</Button>
          </div>
        );
      })}
      {list.length > 0 && (
        <Button variant="outlined" onClick={handleClear}>
          Clear Todo
        </Button>
      )}
    </div>
  );
};

export default List
