import styled from 'styled-components';

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  width: 350px;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const SearchbarButton = styled.button`
  min-width: ${p => p.theme.space[5]}px;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;

export const SearchbarInput = styled.input`
  display: inline-block;
  min-width: ${p => p.theme.space[5]}px;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ::placeholder {
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.secondary};
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
