import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [reverse, setReverse] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const orderChangeHandler = () => {
    setReverse(true);
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} reverse={reverse}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={orderChangeHandler}>Change order</Button>
    </div>
  );
}

export default App;