import styled from 'styled-components';

export const Title = styled.h1`
  text-decoration: underline;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.xl};
`;
