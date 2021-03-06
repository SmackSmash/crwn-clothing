import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: solid 1px black;
  }

  ${({ inverted }) =>
    inverted &&
    css`
      background-color: white;
      color: black;
      border: solid 1px black;

      &:hover {
        background-color: black;
        color: white;
      }
    `}

  ${({ isGoogleSignIn }) =>
    isGoogleSignIn &&
    css`
      color: white;
      background-color: rgb(66, 135, 245);

      &:hover {
        background-color: #357ae8;
        border: none;
        color: white;
      }
    `}
`;
