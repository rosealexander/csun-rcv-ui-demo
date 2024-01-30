import {Line} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = ({sid, data}) => {

  const options = {
    animation: {
      duration: 0
    },
    scales: {
      x: {
        ticks: {
          display: false
        }
      },
      y: {
        ticks: {
          beginAtZero: true,
          callback: function(value) {if (value % 1 === 0) {return value;}}
        }
      }
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: Number(sid) ? new Date(Number(sid) * 1000).toUTCString() : "No Current Video Stream",
      }
    },
  }

  return (
    <Line options={options} data={data} />
    // <Scatter options={options} data={data} />
  )
}

export default Graph;
