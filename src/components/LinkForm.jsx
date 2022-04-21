import React from 'react';

export default function LinkForm({ addArticle }) {
  return (
    <div className="row">
      <h2 className="mt-4 mb-4">To Read App</h2>
      <div className="col">
        <form className="form-inline" onSubmit={addArticle}>
          <input name="link" className="form-control mb-2 mr-sm-2" type="text" placeholder="Link to Article" />
          <button className="btn btn-secondary mb-2" type="submit">Add to list</button>
        </form>
      </div>
    </div>
  );
}
