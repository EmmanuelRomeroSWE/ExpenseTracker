import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";

function AllExpenses() {
  const allExpenses = useSelector((state) => state.expenses.expenses);

  return <ExpensesOutput expensePeriod="Total" expenses={allExpenses} />;
}

export default AllExpenses;
