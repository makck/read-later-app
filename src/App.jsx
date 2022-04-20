import React, { useState } from 'react';

const Articles = ({ articles }) => (
  articles.map((article) => (
    <li key={article} className="list-group-item">{article}</li>
  ))

);

export default function App() {
  const [readingList, setReadingList] = useState([]);

  const addArticle = (event) => {
    event.preventDefault();
    setReadingList([...readingList, event.target.link.value]);
    console.log(event.target.link.value);
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

      <div className="row mt-4">
        <div className="col">
          <h2>Saved Articles</h2>
          <ul className="list-group">
            <Articles articles={readingList} />
          </ul>
        </div>
      </div>
    </div>
  );
}
