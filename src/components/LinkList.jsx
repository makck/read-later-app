import React from 'react';

export default function LinkList({ links, addToReadList }) {
  return (
    <div className="row mt-4">
      <div className="col">
        <h2>To Read List</h2>
        <ul className="list-group">
          {links.map((link, index) => (
            <li key={link} className="list-group-item d-flex justify-content-between">
              {link}
              <input className="form-check-input me-1 pull-right" type="checkbox" onClick={() => addToReadList(link, index)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
