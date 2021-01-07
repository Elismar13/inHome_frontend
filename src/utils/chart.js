import { Chart } from 'chart.js';

function createChart(chartContextID) {
  const context = document.getElementById(chartContextID);

  console.log("CONTEXT", context)

  let chart = new Chart(context, {
    type: 'line',
    data: [1,5,6,3,4,8, 6, 5, 5],
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  return chart;
}

export default createChart;