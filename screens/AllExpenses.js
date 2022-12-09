import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";

function AllExpenses() {
  const allExpenses = useSelector((state) => state.expenses.expenses);
  console.log(allExpenses);
  return (
    <ExpensesOutput
      expensePeriod="Total"
      expenses={allExpenses}
      fallbackText="No registered expenses found!!!"
    />
  );
}

export default AllExpenses;
