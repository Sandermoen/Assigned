import styled from 'styled-components';

export const ClassContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  & > :not(:last-child) {
    margin-right: 3rem;
  }
  & > * {
    margin-bottom: 5rem;
  }
`;

export const ClassHeading = styled.h2`
  font-weight: 400;
  font-size: 2.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ClassHeadingSubText = styled.span`
  color: ${(props) => props.theme.secondary1};
  font-size: 2rem;
  font-weight: 500;
`;
