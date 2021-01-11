import styled from 'styled-components';
import Image from 'next/image';

export const LateralBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 0px;
  height: 100%;
  width: min(5rem, 20%);
  position: sticky;
  top: 0px;  
`;

export const Logo = styled(Image)`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
`;

export const Icon = styled.div`
  margin-top: 0.8rem;
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
  position: fixed;
  bottom: 1rem;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
`;