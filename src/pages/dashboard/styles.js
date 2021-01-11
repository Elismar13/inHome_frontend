import styled from 'styled-components';

export const Container = styled.main`
  /* background-color: black; */
  height: 100%;
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
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dashboard-area-color);
  border-left: 0.1rem solid var(--borders-color);
`;

export const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  background-color: var(--dashboard-area-color);]
`;

export const SensorsData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem 2rem 0rem;
  padding: 1rem 2rem;
`;

export const AmbientsList = styled.section`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  width: 100%;
  background-color: var(--dashboard-cards-container);
  border-radius: 1rem;
  margin: 0rem 0rem 2rem 0rem;
`;

export const Sensors = styled.div`
  height: 20rem;
  background-color: var(--dashboard-cards-container);
  margin: 0rem 0rem 2rem 0rem;
  padding: 1rem 0rem;
  border-radius: 1rem;
  overflow-y: scroll;
`;

export const SensorTitle = styled.h2`
  font-weight: normal;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
`;

export const SensorList = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;

export const GraphsData = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem 0rem  0rem;
`;

export const Charts = styled.div`
  width: 100%;
  height: 34rem;
  padding: 1rem 2rem;
  background-color: var(--dashboard-cards-container);
  border-radius: 1rem;

  overflow: auto;
`;