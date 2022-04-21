import React, { useState } from 'react';
import LinkList from './components/LinkList.jsx';
import ReadList from './components/ReadList.jsx';

export default function App() {
  const [readingList, setReadingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addArticle = (event) => {
    event.preventDefault();
    setReadingList([...readingList, event.target.link.value]);
    event.target.link.value = '';
  };

  const addToReadList = (link, index) => {
    setCompletedList([...completedList, link]);
    const tempUnreadList = [...readingList];
    tempUnreadList.splice(index, 1);
    setReadingList([...tempUnreadList]);
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4 mb-4">To Read App</h2>
        <div className="col">
          <form className="form-inline" onSubmit={addArticle}>
            <input name="link" className="form-control mb-2 mr-sm-2" type="text" placeholder="Link to Article" />
            <button className="btn btn-secondary mb-2" type="submit">Add to list</button>
          </form>
        </div>
      </div>
      {readingList.length > 0 && <LinkList links={readingList} addToReadList={addToReadList} />}
      {completedList.length > 0 && <ReadList completedList={completedList} />}
    </div>
  );
}
