import styled from 'styled-components';

export const BarContainer = styled.header`
  background-color: var(--superior-bar-color);
  height: 6rem;
  width: 100%;
  padding: 0rem 2rem;
  border-bottom: 0.1rem solid var(--borders-color);

  display: flex;
  align-items: center;
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
