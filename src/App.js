import React, { useCallback, useMemo, useState } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log('App test');
  const toggleparagrapHandler = useCallback(() => {
    if(allowToggle){
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>allow toggle</Button>
      <Button onClick={toggleparagrapHandler}>toggle paragrap</Button>
    </div>
  );
}

export default App;
