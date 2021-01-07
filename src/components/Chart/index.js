import React, { useEffect } from 'react';

import createChart from '../../utils/chart';

import { ChartContainer, ChartTitle, ChartCanvas } from './styles';

function Chart(props) {
  useEffect(() => {
    const chart = createChart('chart1');
    console.log(chart)
  });

  return (
    <ChartContainer>
      <ChartTitle>{props.title}</ChartTitle>
      <ChartCanvas id={props.id} />
    </ChartContainer>
  )
}

export default Chart;