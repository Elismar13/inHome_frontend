import styled from 'styled-components';

export const Ambient = styled.div`
  height: 10rem;
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  text-align: start;
  justify-content: center;
  background-color: var(--ambient-card-background-color);
`;

export const Title = styled.h3`
  font-size: 1.35rem;
  font-weight: normal;
  margin-bottom: 0.8rem;
  letter-spacing: 0.15rem;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const Status = styled.span` 

`;