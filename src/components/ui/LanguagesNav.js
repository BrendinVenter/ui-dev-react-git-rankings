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
  justify-content: space-around;
  align-items: center;

  // Reset base styles
  margin: 0;
  list-style: none;

  border-bottom: 1px solid var(--text-color);
`;

const StyledItem = styled.li`
  margin: 0;

  width: 100%;
`;

const StyledButton = styled(Button)`
  // Resets
  border: none;
  width: 100%;
  margin: 0;
  border-radius: 0;

  // Extensions
  //border-bottom: 1px solid var(--text-color);
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
`;

// markup
const LanguagesNav = ({ handleClick }) => {
  const languages = [
    'All',
    'JavaScript',
    'HTML',
    'CSS',
    'Ruby',
    'Python',
    'PHP',
  ];
  return (
    <StyledWrapper>
      <StyledList>
        {languages.map((language) => (
          <StyledItem key={language}>
            <StyledButton type="button" onClick={() => handleClick(language)}>
              {language}
            </StyledButton>
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

LanguagesNav.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LanguagesNav;
