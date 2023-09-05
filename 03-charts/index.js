const chartOptions = {
  chart: {
    type: 'area',
    height: 180,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: ['#3498db'], // chart color
  series: [{ name: 'Views', data: [18, 50, 42, 94, 41, 65] }], // chart data
  dataLabels: { enabled: true }, // show chart data labels
  stroke: { width: 3, curve: 'smooth' },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: ['Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec'], // set x-axis categories
    axisBorder: { show: true }, // show/hide x-axis border
    labels: { style: { colors: '#a7a7a7', fontFamily: 'Poppins' } },
  },
  yaxis: { show: false },
  grid: {
    borderColor: 'rgba(0, 0, 0, 0)',
    padding: { top: -28, bottom: -8, left: 12, right: 12 },
  },
  tooltip: {
    enabled: true,
    y: { formatter: (value) => `${value}K` },
    style: { colors: '#a7a7a7', fonFamily: 'Poppins' },
  },
  markers: { show: false },
};

const chartArea = document.querySelector('.chart-area');
const chart = new ApexCharts(chartArea, chartOptions);
chart.render();
