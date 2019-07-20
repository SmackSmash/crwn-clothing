import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionNavLink = styled(NavLink)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: solid 3px transparent;
  transition: border-bottom-color 0.5s ease-in-out;

  &.active {
    border-bottom-color: #222;
  }
`;
