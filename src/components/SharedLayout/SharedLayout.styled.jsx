import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  width: ${p => p.theme.space[7]}px;
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[5]}px;
  }

  &.active {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
`;

export const Header = styled.header`
  top: ${p => p.theme.space[0]}px;
  left: ${p => p.theme.space[0]}px;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;
