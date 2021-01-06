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
  border-right: 0.1rem solid;
  border-color: var(--borders-color);
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dashboard-area-color);
`;

export const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

export const SensorsData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem 2rem 0rem;
  padding: 1rem 2rem;
`;

export const Sensors = styled.div`
  background-color: var(--dashboard-cards-container);
  margin: 0rem 0rem 2rem 0rem;
  padding: 1rem 0rem;
  border-radius: 1rem;
`;

export const AmbientsList = styled.section`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  width: 100%;
  background-color: var(--dashboard-cards-container);
  border-radius: 1rem;
  margin: 0rem 0rem 2rem 0rem;
  /* overflow-x: scroll; */
`;

export const SensorTitle = styled.h2`
  font-weight: normal;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
`;

export const SensorList = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  /* overflow-x: scroll; */
`;

export const GraphsData = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem 0rem  0rem;
`;

export const Charts = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dashboard-cards-container);
  border-radius: 1rem;
`;