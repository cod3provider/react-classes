import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  color: #9a49e5;
  text-decoration: none;

  &.active {
    color: blueviolet;
    font-weight: 700;
  }
`;
