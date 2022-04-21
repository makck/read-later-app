import React from 'react';

export default function ReadList({ completedList }) {
  return (

    <div className="row mt-4">
      <div className="col">
        <h2>Read List</h2>
        <ul className="list-group">
          {completedList.map((link) => (
            <li key={`read-${link}`} className="list-group-item d-flex justify-content-between">
              {link}
              <input className="form-check-input me-1 pull-right" type="checkbox" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
