import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { get, update } from '../utils/pollService.js';

function PollScreen() {
  const [error, setError] = useState(null);
  const [poll, setPoll] = useState(null);

  const Button = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  const urlId = useLocation().pathname.split('/')[2];

  const vote = (optionId, answer, votes) => {
    const data = { optionId, answer, votes };
    update(urlId, data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get(urlId);
      if (error) {
        setError(error);
      } else {
        setPoll(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        <div className="details">
          <div className="details-info">
            <ul>
              <li>
                <h4>{poll && poll.question}</h4>
              </li>
              <li>
                Svar:
                {poll &&
                  poll.options.map(
                    (options) =>
                      options.answers && (
                        <Button type="button">{options.answers}</Button>
                      )
                  )}
              </li>
              <li>Laget av: {poll && poll.author.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollScreen;
