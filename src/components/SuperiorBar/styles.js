import styled from 'styled-components';

export const BarContainer = styled.header`
  background-color: var(--superior-bar-color);
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 2rem;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: normal;
`;

export const Links = styled.ul`
  list-style-position: outside;
`;

export const LinkItem = styled.li`
  display: inline;

`;

export const LinkButton = styled.a`
  margin-left: 0.8rem;
  font-size: 1.2rem;
`;
