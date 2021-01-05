import styled from 'styled-components';

export const Sensor = styled.div`
  margin-top: 1rem;
  height: 2.5rem;
  width: 100%;
  padding: 0 1rem;
  background-color: var(--sensor-card-background-color);
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Type = styled.h3`
  font-size: 1.1rem;
  font-weight: normal;
`;

export const Value = styled.p`
  font-size: 0.9rem;
`;

export const Ambient = styled.span`
  font-size: 1.1rem;

`;