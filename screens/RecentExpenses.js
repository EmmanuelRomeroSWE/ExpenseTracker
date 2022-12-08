import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";

import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expenses = useSelector((state) => state.expenses.expenses);

  const recent = expenses.filter((expense) => {
    let today = new Date();
    let last7Day = getDateMinusDays(today, 7);

    return expense.date > last7Day;
  });
  console.log(recent);
  return <ExpensesOutput expensePeriod="Last 7 days" expenses={recent} />;
}

export default RecentExpenses;
