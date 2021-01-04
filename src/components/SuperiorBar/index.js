import React from 'react';

import { BarContainer, LinkButton, Links, PageTitle } from './styles';

function SuperiorBar( props ) {
  return (
    <BarContainer>
      <PageTitle>Dashboard</PageTitle>
      <Links>
        <LinkButton href='/'>Repositório</LinkButton>
        <LinkButton href='/'>Sobre</LinkButton>
      </Links>
    </BarContainer>
  )
}

export default SuperiorBar;