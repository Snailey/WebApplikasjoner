import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../utils/pollService.js';

function HomeScreen() {
  const [error, setError] = useState(null);
  const [polls, setPolls] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="poll">
      {error && <p>{error}</p>}
      <ul className="polls">
        {polls &&
          polls.map((poll) => (
            <li key={poll._id}>
              <div className="poll-wrapping">
                <div className="poll-name">
                  <h2>
                    <Link to={`/poll/${poll._id}`}>{poll.question}</Link>
                  </h2>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomeScreen;
