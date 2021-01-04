import Link from 'next/link';
import React from 'react';

import SuperiorBar from '../../components/SuperiorBar';
import SideBar from '../../components/SideBar';
import { Container, Wrapper } from './styles';

function Dashboard( props ) {
  return (
    <Container>
      <Wrapper>
        <SideBar />
        <SuperiorBar />
      </Wrapper>
    </Container>
  )
}

export default Dashboard;