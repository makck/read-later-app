import React, { useState } from 'react';
import validUrl from 'valid-url';
import LinkList from './components/LinkList.jsx';
import ReadList from './components/ReadList.jsx';
import LinkForm from './components/LinkForm.jsx';

export default function App() {
  const [readingList, setReadingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addArticle = (event) => {
    event.preventDefault();

    if (validUrl.isUri(event.target.link.value)) {
      setReadingList([...readingList, event.target.link.value]);
      event.target.link.value = '';
    } else {
      event.target.link.value = 'Please enter a valid URL.';
    }
  };

  const addToReadList = (link, index) => {
    setCompletedList([...completedList, link]);
    const tempUnreadList = [...readingList];
    tempUnreadList.splice(index, 1);
    setReadingList([...tempUnreadList]);
  };

  return (
    <div className="container">
      <LinkForm addArticle={addArticle} />
      {readingList.length > 0 && <LinkList links={readingList} addToReadList={addToReadList} />}
      {completedList.length > 0 && <ReadList completedList={completedList} />}
    </div>
  );
}
