const getHumanMonth = (m) => {
  const [_, month, __] = new Date(new Date().getFullYear(), m - 1, 1)
    .toDateString()
    .split(" ");
  return month;
};

const updateTopMonthsUI = (topMonth, type) => {
  if (type === "expenses") {
    document.querySelector(".expense-top-month").textContent = getHumanMonth(
      Object.keys(topMonth)[0]
    );
    document.querySelector(
      ".expense-top-month-value"
    ).textContent = Object.values(topMonth)[0];
  } else {
    document.querySelector(".income-top-month").textContent = getHumanMonth(
      Object.keys(topMonth)[0]
    );
    document.querySelector(
      ".income-top-month-value"
    ).textContent = Object.values(topMonth)[0];
  }
};

const updateThisMonthUI = (data = [], type = "expenses") => {
  const currentMonthNumber = new Date().getMonth() + 1;

  const currentMonthData = data.find((item, i) => {
    const key = currentMonthNumber;
    // TODO
    return item;
  });

  if (type === "expenses") {
    document.querySelector(".expense-this-month").textContent = getHumanMonth(
      Object.keys(currentMonthData)[0]
    );
    document.querySelector(
      ".expense-this-month-value"
    ).textContent = Object.values(currentMonthData)[0];
  } else {
    document.querySelector(".income-this-month").textContent = getHumanMonth(
      Object.keys(currentMonthData)[0]
    );
    document.querySelector(
      ".income-this-month-value"
    ).textContent = Object.values(currentMonthData)[0];
  }
};

const formatStats = (data = {}, type = "expenses") => {
  const monthData = data.months;
  console.log("monthData", monthData);
  const vals = Object.values(monthData);
  const s = vals.map((item, i) => ({ [i + 1]: item }));

  const sorted = s.sort((a, b) =>
    Object.values(a)[0] > Object.values(b)[0] ? -1 : 1
  );
  const topMonth = sorted[0];
  if (type === "expenses") {
    updateThisMonthUI(s, "expenses");
  }
  if (type === "income") {
    updateThisMonthUI(s, "income");
  }

  updateTopMonthsUI(topMonth, type);
};

const setGraphs = (data) => {};
const fetchData = () => {
  const promise1 = fetch("/expense_summary_rest")
    .then((res) => res.json())
    .then((data) => Promise.resolve(data))
    .catch((e) => Promise.reject(e));
  const promise2 = fetch("/last_3months_stats")
    .then((res) => res.json())
    .then((data) => Promise.resolve(data))
    .catch((e) => Promise.reject(e));
  const promise3 = fetch("/income/income_sources_data")
    .then((res) => res.json())
    .then((data) => Promise.resolve(data))
    .catch((e) => Promise.reject(e));
  const promise4 = fetch("/income/income_summary_rest")
    .then((res) => res.json())
    .then((data) => Promise.resolve(data))
    .catch((e) => Promise.reject(e));

  Promise.all([promise1, promise2, promise3, promise4])
    .then((data) => {
      const [
        thisYearExpenses,
        expenseCategories,
        incomeSources,
        thisYearIncome,
      ] = data;
      formatStats(thisYearExpenses.this_year_expenses_data, "expenses");
      formatStats(thisYearIncome.this_year_income_data, "income");
      setGraphs(data);
    })
    .catch((errs) => console.log("errs", errs));
};

window.onload = () => fetchData();
