import React from 'react';
import './App.css';

import Jobs from "./Jobs"

const mockJobs = [
  {id: 'swe1', title: 'SWE 1', company: 'Google'},
  {id: 'swe2', title: 'SWE 2', company: 'Apple'},
  {id: 'swe3', title: 'SWE 3', company: 'Facebook'},
  {id: 'swe4', title: 'SWE 4', company: 'Tesla'},
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
