import React, { useEffect, useState } from 'react';

import { ChartContainer, ChartTitle, ChartCanvas } from './styles';

function Chart(props) {
  return (
    <ChartContainer>
      <ChartTitle>{props.title}</ChartTitle>
      <ChartCanvas id={props.id} />
    </ChartContainer>
  )
}

export default Chart;