import React, { useState, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [reverse, setReverse] = useState(false);
  const [sortOrder, setSortOrder] = useState('Change to descending');

  const orderChangeHandler = () => {
    !reverse? setSortOrder('Change to ascending'):setSortOrder('Change to descending');
    setReverse(!reverse);
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} reverse={reverse}/>
      <Button onClick={orderChangeHandler}>{sortOrder}</Button>
    </div>
  );
}

export default App;