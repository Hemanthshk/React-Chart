import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './PopChart.css';

function PopChart() {
  // Chart options
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 450,
      width: "100%",
      type: "bar",
      background: "#f4f4f4",
      foreColor: "#333"
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    series: [
      {
        name: "Population",
        data: [
          8550405,
          3971883,
          2720546,
          2296224,
          1567442,
          1563025,
          1469845,
          1394928,
          1300092,
          1026908
        ]
      }
    ],
    xaxis: {
      categories: [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Philadelphia",
        "Phoenix",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose"
      ]
    },
    fill: {
      colors: ["#F44336"]
    },
    dataLabels: {
      enabled: false
    },

    title: {
      text: "Largest US Cities By Population",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px"
      }
    }
  });

  const [isHorizontal, setIsHorizontal] = useState(false);

  // Event handling for the button click
  const handleButtonClick = () => {
    if (isHorizontal) {
      setChartOptions({
        ...chartOptions,
        plotOptions: {
          bar: {
            horizontal: false
          }
        }
      });
    } else {
      setChartOptions({
        ...chartOptions,
        plotOptions: {
          bar: {
            horizontal: true
          }
        }
      });
    }

    setIsHorizontal(!isHorizontal); // Toggle the orientation state
  };

  return (
    <div className="grid-container">
      <div className="chart-container">
        <div className="mixed-chart">
          {/* Chart options */}
          <Chart options={chartOptions} series={chartOptions.series} type="bar" width="100%" />
        </div>
      </div>
      <div className="button-container"> 
        <button
          className={`button ${isHorizontal ? 'horizontal-button' : 'vertical-button'}`}
          id="change"
          onClick={handleButtonClick}
        >
          {isHorizontal ? "Vertical Bars" : "Horizontal Bars"}
        </button>
      </div>
    </div>
  );
}

export default PopChart;
