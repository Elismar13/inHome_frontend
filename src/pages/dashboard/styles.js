import styled from 'styled-components';

export const Container = styled.main`
  /* background-color: black; */
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled.article`
  height: 100%;
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  border-left: 0.15rem solid;
  border-right: 0.15rem solid;
  border-color: var(--wrapper-border-color);
`;