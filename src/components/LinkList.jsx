import React from 'react';

export default function LinkList({ links }) {
  return (
    <div className="row mt-4">
      <div className="col">
        <h2>Saved Articles</h2>
        <ul className="list-group">
          {links.map((link) => (
            <li key={link} className="list-group-item d-flex justify-content-between">
              {link}
              <input className="form-check-input me-1 pull-right" type="checkbox" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
