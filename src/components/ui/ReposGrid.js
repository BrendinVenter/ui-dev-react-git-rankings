import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1em;

  background-color: var(--text-color);
  border-radius: 0.5em;

  color: var(--app-background-color);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  text-align: center;

  // Reset base styles
  margin: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  padding: 1em;
  margin: 1em 0;
  width: 250px;
`;

const StyledImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 3px;
  margin: 0 auto;
  display: block;
`;

const StyledDataList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  text-align: left;
  margin: 0;
`;

const StyledDataListItem = styled.li`
  margin: 0;

  svg {
    margin-right: 1em;
  }
`;

// eslint-disable-next-line no-unused-vars
const ReposGrid = ({ repos }) => (
  <>
    <StyledList>
      {repos.map((item) => (
        <StyledListItem>
          <StyledCard>
            <div>
              <span>#1</span>
              <StyledImage
                src={item.owner.avatar_url}
                alt={`${item.name} logo`}
              />
              <h5>{item.name}</h5>
            </div>
            <StyledDataList>
              <StyledDataListItem>
                <FaUser />
                {item.language}
              </StyledDataListItem>
              <StyledDataListItem>
                <FaStar />
                {item.stargazers_count}
              </StyledDataListItem>
              <StyledDataListItem>
                <FaCodeBranch />
                {item.forks_count}
              </StyledDataListItem>
              <StyledDataListItem>
                <FaExclamationTriangle />
                {item.open_issues_count}
              </StyledDataListItem>
            </StyledDataList>
          </StyledCard>
        </StyledListItem>
      ))}
    </StyledList>
    {/* <pre>{JSON.stringify(repos, null, 2)}</pre> */}
  </>
);

// TODO: Add PropTypes

ReposGrid.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReposGrid;
