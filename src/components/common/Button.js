import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: var(--text-color);
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid var(--text-color);
  cursor: pointer;
  box-sizing: border-box;

  &:hover,
  &:focus {
    color: var(--app-background-color);
    border-color: var(--text-color);
    background-color: var(--text-color);
    outline: 0;
  }

  ${(props) =>
    props.solid &&
    css`
      background-color: var(--text-color);
      border-color: var(--text-color);
      color: var(--app-background-color);

      &:hover,
      &:focus {
        color: var(--text-color);
        border-color: var(--text-color);
        background-color: var(--app-background-color);
        outline: 0;
    `}
`;

// eslint-disable-next-line import/prefer-default-export
export { Button };
