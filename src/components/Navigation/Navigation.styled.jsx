import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &.active {
    color: red;
    font-weight: 700;
  }
`;
