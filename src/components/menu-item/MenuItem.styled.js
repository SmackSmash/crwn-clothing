import styled from 'styled-components';

export const MenuItem = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size === 'large' ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
    }
    & .content {
      opacity: 0.9;
    }
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  transition: transform 6s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.7);
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
