import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  width: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.s};
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  width: ${p => p.theme.space[7]}px;
  padding: ${p => p.theme.space[2]}px;
  text-decoration: underline;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.text};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  :hover,
  :focus-visible {
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  }
`;
