import Link from 'next/link';
import React from 'react';

import { BarContainer, LinkItem, LinkButton, Links, PageTitle } from './styles';

function SuperiorBar( props ) {
  return (
    <BarContainer>
      <PageTitle>Dashboard</PageTitle>
      <Links>
        <LinkItem>
          <LinkButton href='https://github.com/Elismar13/inHome-Documentation'>Repositório</LinkButton>
        </LinkItem>
        <LinkItem>
          <Link href='/'>
            <LinkButton>Sobre</LinkButton>
          </Link>
        </LinkItem>
      </Links>
    </BarContainer>
  )
}

export default SuperiorBar;