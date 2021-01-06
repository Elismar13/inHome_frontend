import React from 'react';

import { LateralBar, Icon, Photo, Logo } from './styles';
import { MdPoll, MdHome } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { IoHardwareChipOutline } from 'react-icons/io5';

const iconColors = "#162223";

function SideBar(props) {
  return (
    <LateralBar>
      <Logo width={64} height={64} src="/inHome_logo.png" alt="inHome logo" />
      <Icon>
        <MdPoll size={32} color={iconColors}/>
      </Icon>
      <Icon>
        <MdHome size={32} color={iconColors}/>
      </Icon>
      <Icon>
        <IoHardwareChipOutline size={32} color={iconColors}/>
      </Icon>
      <Icon>
        <AiOutlineUser size={32} color={iconColors} />
      </Icon>

      <Photo src='https://www.sydney.edu.au/dam/corporate/images/news-and-opinion/news/2018/october/puppy_dog.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg' />
    </LateralBar>
  )
}

export default SideBar;