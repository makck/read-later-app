import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <input type="text" placeholder="Link to Article" />
            <button type="button">Add link to list</button>
          </form>
        </div>
      </div>
    </div>
  );
}
