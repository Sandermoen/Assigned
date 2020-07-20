import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 97%;
  height: 97%;
  text-align: left;
  color: ${(props) => props.theme.secondary1};
  margin: auto 0;
  border-radius: 20px;
  padding: 5rem 10rem;
  box-shadow: 0 5px 10px 0px rgba(0, 170, 108, 0.8);
`;

export const AssignmentContainer = styled.div`
  margin-bottom: 5rem;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 4rem;
`;

export const SubHeader = styled.h3`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const AssignmentList = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
  & > * {
    display: flex;
    align-items: center;
  }

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const AssignmentHeader = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin-left: 1.5rem;
  color: ${(props) => props.theme.grey2};
  margin-right: auto;
`;
