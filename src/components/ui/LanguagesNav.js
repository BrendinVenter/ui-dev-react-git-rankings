import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../common';

const StyledWrapper = styled.div`
  padding: 1em;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  // Reset base styles
  margin: 0;
  list-style: none;
`;

const StyledItem = styled.li`
  margin: 0;
`;

const StyledButton = styled(Button)`
  // Resets
  border: none;
  margin: 0;
  border-radius: 0;

  // Extensions
  border-bottom: 1px solid var(--text-color);
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
`;

// markup
const LanguagesNav = ({ languages, handleClick }) => (
  <StyledWrapper>
    <StyledList>
      {languages.map((language) => (
        <StyledItem key={language.id}>
          <StyledButton type="button" onClick={handleClick}>
            {language.name}
          </StyledButton>
        </StyledItem>
      ))}
    </StyledList>
  </StyledWrapper>
);

LanguagesNav.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LanguagesNav;
