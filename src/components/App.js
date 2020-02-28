import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header'
import addNewItem from './addNewItem';
import completedItemList from './completedItemList';
import completeItem from './completeItem';
import editItem from './editItem';
import removeItem from './removeItem';
import toDoList from './toDoList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Route path="/" exact component={toDoList} />
          <Route path="/add-item" component={addNewItem} />
          <Route path="/completed-item-list" component={completedItemList} />
          <Route path="/complete-item" component={completeItem} />
          <Route path="/edit-item" component={editItem} />
          <Route path="/remove-item" component={removeItem} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;