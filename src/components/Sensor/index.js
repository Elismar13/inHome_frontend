import React from 'react';

import { MdMoreVert } from 'react-icons/md';
import { IoHardwareChipOutline } from 'react-icons/io5';
import { Sensor, Type, Value, Ambient } from './styles';

function SensorCard(props) {
  return (
    <Sensor>
      <IoHardwareChipOutline size={24} />
      <Type>{props.sensor_type}</Type>
      <Value>{props.value}</Value>
      <Ambient>{props.ambient}</Ambient>
      <MdMoreVert size={24}/>
    </Sensor>
  );
}

export default SensorCard;