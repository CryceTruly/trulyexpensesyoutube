// let ctx = document.getElementById("myChart").getContext("2d");
// let loader = document.querySelector("#loading-stuff");

// const getData = async () => {
//   const data = await (await fetch("/expense_summary_rest")).json();
//   const [labels1, values1] = [
//     Object.keys(data.data.months),
//     Object.values(data.data.months),
//   ];
//   const letteredLabels = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sept",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   showChart(letteredLabels, values1);
// };

// getData();

// const showChart = (labels1, values1, labels2, values2) => {
//   loader.style.display = "none";
//   var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: "line",

//     // The data for our dataset
//     data: {
//       labels: labels1,
//       datasets: [
//         {
//           label: "This year",
//           backgroundColor: "rgb(255, 99, 132)",
//           borderColor: "rgb(255, 99, 132)",
//           data: values1,
//         },
//       ],
//     },

//     // Configuration options go here
//     options: {},
//   });

//   var ctx1 = document.getElementById("myChartOne").getContext("2d");
//   var chart = new Chart(ctx1, {
//     // The type of chart we want to create
//     type: "line",

//     // The data for our dataset
//     data: {
//       labels: labels2,
//       datasets: [
//         {
//           label: "This Week",
//           backgroundColor: "#18BC9C",
//           borderColor: "#18BC9C",
//           data: values2,
//         },
//       ],
//     },

//     // Configuration options go here
//     options: {},
//   });
// };

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
