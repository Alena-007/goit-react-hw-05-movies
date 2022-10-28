import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: 4px;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondary};

  &.active {
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  }
`;
