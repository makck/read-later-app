import React, { useState } from 'react';
import axios from 'axios';

const Articles = ({ articles }) => (
  <li className="list-group-item">
    {articles.map((article) => (
      <p>{article}</p>
    ))}
  </li>
);

export default function App() {
  const [readingList, setReadingList] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form className="form-inline">
            <input className="form-control mb-2 mr-sm-2" type="text" placeholder="Link to Article" />
            <button className="btn btn-secondary mb-2" type="button">Add to list</button>
          </form>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>Saved Articles</h2>
          <ul className="list-group">
            <Articles />
          </ul>
        </div>
      </div>
    </div>
  );
}
