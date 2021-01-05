import styled from 'styled-components';

export const LateralBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.0rem 0px;
  height: 100%;
  width: min(5rem, 20%);

  border-right: 0.1rem solid var(--borders-color);
`;

export const Icon = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  color: blue;
  border-radius: 50%;

  :hover {
    background-color: green;
  }
`;

export const Photo = styled.img`
  position: absolute;
  bottom: 1rem;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
`;