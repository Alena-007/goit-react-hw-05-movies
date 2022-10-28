import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[2]}px;
`;

export const CastItem = styled.li`
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[7]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.3);
`;

export const CastImg = styled.img`
  display: block;
  height: 150px;
  margin: 0 auto;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
`;
export const CastNoImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 150px;
  text-align: center;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
`;
export const CastDescr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px;
  & h4 {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  & p {
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;
