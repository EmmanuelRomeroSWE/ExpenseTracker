import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [
      {
        id: "e1",
        amount: 100.43,
        description: "A pair of shoes",
        date: new Date("2022-01-01"),
      },
      {
        id: "e2",
        amount: 200.67,
        description: "A fur coat",
        date: new Date("2022-01-02"),
      },
      {
        id: "e3",
        amount: 300.92,
        description: "Nintendo Switch",
        date: new Date("2022-01-03"),
      },
      {
        id: "e4",
        amount: 400.32,
        description: "Xbox",
        date: new Date("2022-01-04"),
      },
      {
        id: "e5",
        amount: 500.32,
        description: "Playstation 5",
        date: new Date("2022-01-05"),
      },
      {
        id: "e6",
        amount: 2500.87,
        description: "Macbook Pro",
        date: new Date("2022-01-06"),
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      let { description, amount, date } = action.payload;
      let id = new Date().toString() + Math.random().toString();
      state.expenses.push({ id, description, amount, date });
    },
    deleteExpense: (state, action) => {
      let { id } = action.payload;
      state.expenses = state.expenses.filter((expense) => expense.id !== id);
    },
    updateExpense: (state, action) => {
      let { id, description, amount, date } = action.payload;
      let idx = state.expenses.findIndex((expense) => expense.id === id);
      state.expenses[idx] = action.payload;
    },
  },
});

export const addExpense = expensesSlice.actions.addExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;
