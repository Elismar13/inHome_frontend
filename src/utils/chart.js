import { Chart } from 'chart.js';

export function addData(chart, label, data) {
    console.log(chart)
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

export function removeData(chart) {
    chart.data.labels.shift();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
    });
    chart.update();
}

export function createChart(chartContextID, chartTitle) {
    const context = document.getElementById(chartContextID);
    console.log(context)
    let chart = new Chart(context, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
            label: chartTitle,
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
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

    return {
      chart_id: chartTitle,
      chart,
    };
}
