var ctx = document.getElementById("myChart").getContext("2d");
const getRandomType = () => {
  const types = [
    "bar",
    "horizontalBar",
    "pie",
    "line",
    "radar",
    "doughnut",
    "polarArea",
  ];
  return types[Math.floor(Math.random() * types.length)];
};

const displayChart = (data, labels) => {
  const type = getRandomType();
  var myChart = new Chart(ctx, {
    type: type, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: labels,
      datasets: [
        {
          label: `Amount (Last 6 months) (${type} View)`,
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 99, 132,0.7)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132,0.7)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Expense  Distribution Per Category",
        fontSize: 25,
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "#000",
        },
      },
    },
  });
};

const getCategoryData = () => {
  fetch("last_3months_stats")
    .then((res) => res.json())
    .then((res1) => {
      const results = res1.expenses_category_data;
      const [labels, data] = [Object.keys(results), Object.values(results)];
      console.log("data", data);
      displayChart(data, labels);
    });

  const data = [3000, 2000, 40000, 7000];
  const labels = ["TRAVEL", "FOOD", "FRIENDS", "FAMILY"];
};

document.onload = getCategoryData();
