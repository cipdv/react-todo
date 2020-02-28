import React from 'react';
import AddNewItem from './addNewItem';

class toDoList extends React.Component {
  render() {
    return (
    <div className="ui container">
      <div>
        <h2>To-do List:</h2>
      </div>
      <div>
          <AddNewItem />
      </div>
    </div>
  );
};
};

export default toDoList;

