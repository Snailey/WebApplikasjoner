import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { create, get } from '../utils/pollService.js';

const initialState = {
  question: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  option5: '',
};

function UserPollScreen() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState(null);
  const [option2, setOption2] = useState(null);
  const [option3, setOption3] = useState(null);
  const [option4, setOption4] = useState(null);
  const [option5, setOption5] = useState(null);
  const [polls, setPolls] = useState(null);

  const Button = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  const author = localStorage.getItem('id');

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      question,
      author,
      options: [
        { answers: option1 },
        { answers: option2 },
        { answers: option3 },
        { answers: option4 },
        { answers: option5 },
      ],
    };
    create(data);
  };

  const openModal = (poll) => {
    setModalVisible(true);
    setId(poll._id);
    setQuestion(poll.question);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get();
      if (error) {
        setError(error);
      } else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="content content-margined">
      <div className="poll-header">
        <Button className="button primary" onClick={() => openModal({})}>
          Lag ny Spørring
        </Button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Lag ny Spørring</h2>
              </li>
              <li>
                <label htmlFor="name">Spørsmål</label>
                <input
                  type="text"
                  name="name"
                  value={question}
                  id="name"
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="name">Valg 1</label>
                <input
                  type="text"
                  name="name"
                  value={option1}
                  id="name"
                  onChange={(e) => setOption1(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="name">Valg 2</label>
                <input
                  type="text"
                  name="name"
                  value={option2}
                  id="name"
                  onChange={(e) => setOption2(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="name">Valg 3</label>
                <input
                  type="text"
                  name="name"
                  value={option3}
                  id="name"
                  onChange={(e) => setOption3(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="name">Valg 4</label>
                <input
                  type="text"
                  name="name"
                  value={option4}
                  id="name"
                  onChange={(e) => setOption4(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="name">Valg 5</label>
                <input
                  type="text"
                  name="name"
                  value={option5}
                  id="name"
                  onChange={(e) => setOption5(e.target.value)}
                />
              </li>
              <li>
                <Button type="submit" className="button primary">
                  Lagre spørring
                </Button>
              </li>
              <li>
                <Button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Tilbake
                </Button>
              </li>
            </ul>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserPollScreen;
