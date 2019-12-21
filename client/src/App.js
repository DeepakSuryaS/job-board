import React, {useEffect, useState} from 'react';
import './App.css';

import Jobs from "./Jobs"

const JOB_API_URL = 'http://localhost:3001/jobs';

const mockJobs = [
  {id: 'swe1', title: 'SWE 1', company: 'Google'},
  {id: 'swe2', title: 'SWE 2', company: 'Apple'},
  {id: 'swe3', title: 'SWE 3', company: 'Facebook'},
  {id: 'swe4', title: 'SWE 4', company: 'Tesla'},
]

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  updateCb(json); // updateJobs 
}

function App() {

  const [jobsList, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobsList} />
    </div>
  );
}

export default App;
