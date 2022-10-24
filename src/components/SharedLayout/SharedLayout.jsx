import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
