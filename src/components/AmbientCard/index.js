import React from 'react';

import { Ambient, Title, Description, Status } from './styles';

function AmbientCard(props) {
  return (
    <Ambient>
      <Title>{props.ambient_title}</Title>
      <Description>{props.description}</Description>
      <Status>Status: {props.status}.</Status>
      <Status> Ultima atualização: {props.last_update}</Status>
    </Ambient>
  );
}

export default AmbientCard;