import React from 'react';

import { LateralBar, Icon, Photo } from './styles';
import { MdPoll } from 'react-icons/md';

function SideBar(props) {
  return (
    <LateralBar>
      <Icon>
        <MdPoll size={32} />
      </Icon>
      <Icon>
        <MdPoll size={32} />
      </Icon>
      <Icon>
        <MdPoll size={32} />
      </Icon>
      <Icon>
        <MdPoll size={32} />
      </Icon>

      <Photo />
    </LateralBar>
  )
}

export default SideBar;