import React from 'react';

import { Ambient, Title, Description, Status } from './styles';

function AmbientCard(props) {
  return (
    <Ambient>
      <Title>{props.ambient_title}</Title>
      <Description>{props.description}</Description>
      <Status>{props.status}</Status>
    </Ambient>
  );
}

export default AmbientCard;