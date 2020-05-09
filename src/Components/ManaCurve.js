import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { DeckContext } from "../DataStore/DeckContext";

function ManaCurve(props) {
  const { getManaCurve } = useContext(DeckContext);
  const options = {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Mana Curve",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Number of Cards",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Mana Cost",
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      custom: function (tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
      },
      callbacks: {
        label: function (tooltipItem, data) {
          return tooltipItem.value + " cards";
        },
        title: function (tooltipItems, data) {
          return tooltipItems[0].xLabel + " mana";
        },
        beforeLabel: function (tooltipItem, data) {
          return "";
        },
      },
    },
  };
  const data = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7+"],
    datasets: [
      {
        label: "#cards",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(121, 200, 231, 0.77)",
        borderColor: "rgba(74, 158, 191, 1)",
        borderCapStyle: "square",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "round",
        pointBorderColor: "rgba(74, 158, 191, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "rgba(102, 212, 255, 0.84)",
        pointHoverBorderColor: "rgba(37, 160, 208, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: getManaCurve(),
        options: {
          title: {
            display: true,
            text: "Mana Curve",
          },
        },
      },
    ],
  };

  return (
    <div style={{ width: "530px" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default ManaCurve;
