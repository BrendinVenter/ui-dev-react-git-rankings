import React from 'react';
import { FaFighterJet, FaTrophy, FaUserFriends } from 'react-icons/fa';
import styled from 'styled-components';

const StyledInstructions = styled.div`
  h1 {
    color: var(--text-color);
  }

  color: var(--app-background-color);
  padding: 2em;

  ol {
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
  }

  li {
    background-color: var(--text-color);
    padding: 1em;
    border-radius: 1em;
    text-align: center;

    width: 33.3%;

    list-style: none;
  }
`;
function Instructions() {
  return (
    <StyledInstructions>
      <h1>Instructions</h1>
      <ol>
        <li>
          <h3>Enter two Github users</h3>
          <FaUserFriends size={140} />
        </li>
        <li>
          <h3>Battle</h3>
          <FaFighterJet size={140} />
        </li>
        <li>
          <h3>See the winners</h3>
          <FaTrophy size={140} />
        </li>
      </ol>
    </StyledInstructions>
  );
}

export default Instructions;
