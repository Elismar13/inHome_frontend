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

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export const SensorsData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AmbientsList = styled.section`
  display: flex;
  /* overflow-x: scroll; */
`;

export const SensorTitle = styled.h2`
  
`;

export const SensorList = styled.section`
  display: flex;
  flex-direction: column;
  /* overflow-x: scroll; */
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GraphsData = styled.div`
  width: 100%;
  height: 100%;
`;
