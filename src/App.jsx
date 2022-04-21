import React, { useState } from 'react';
import LinkList from './components/LinkList.jsx';

export default function App() {
  const [readingList, setReadingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addArticle = (event) => {
    event.preventDefault();
    setReadingList([...readingList, event.target.link.value]);
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
        <div className="col">
          <form className="form-inline" onSubmit={addArticle}>
            <input name="link" className="form-control mb-2 mr-sm-2" type="text" placeholder="Link to Article" />
            <button className="btn btn-secondary mb-2" type="submit">Add to list</button>
          </form>
        </div>
      </div>
      {readingList.length > 0 && <LinkList links={readingList} addToReadList={addToReadList} />}

      <div className="row mt-4">
        <div className="col">
          <h2>Read List</h2>
          <ul className="list-group">
            {completedList.map((link) => (
              <li key={link} className="list-group-item d-flex justify-content-between">
                {link}
                <input className="form-check-input me-1 pull-right" type="checkbox" />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
