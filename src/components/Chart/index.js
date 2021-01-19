import React, { useEffect, useState } from 'react';

import createChart from '../../utils/chart';

import { ChartContainer, ChartTitle, ChartCanvas } from './styles';

function Chart(props) {
  const [charts, setCharts] = useState(null);
  
  useEffect(() => {
    const chart = createChart('chart1');
  });

  return (
    <ChartContainer>
      <ChartTitle>{props.title}</ChartTitle>
      <ChartCanvas id={props.id} />
    </ChartContainer>
  )
}

export default Chart;