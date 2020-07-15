import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  expenses: [
    {
      id: 1,
      category: "meal",
      title: "식사",
      content: "이모네 식당",
      amount: 20000,
    },
    {
      id: 2,
      category: "grocery",
      title: "식료품",
      content: "당근",
      amount: 5000,
    },
    {
      id: 3,
      category: "transportation",
      title: "교통",
      content: "지하철",
      amount: 20000,
    },
    {
      id: 4,
      category: "living",
      title: "생활",
      content: "관리비",
      amount: 100000,
    },
    {
      id: 5,
      category: "medical",
      title: "의료",
      content: "진통제",
      amount: 7000,
    },
    {
      id: 6,
      category: "meal",
      title: "식사",
      content: "커피",
      amount: 25000,
    },
    {
      id: 7,
      category: "grocery",
      title: "식료품",
      content: "파스타면",
      amount: 30000,
    },
  ],
  filter: "all",
  filterExpenses: [],
};

function expensesReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        filter: "all",
        expenses: state.expenses.concat(action.expense),
      };
    case "UPDATE":
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.id ? (expense = action.expense) : expense
        ),
      };
    case "DELETE":
      return state.expenses.filter((expense) => expense.id !== action.id);
    case "FILTER":
      return {
        ...state,
        filter: action.filter,
        filterExpenses: state.expenses.filter(
          (expense) => expense.category === action.filter
        ),
      };
    default:
      throw new Error("error");
  }
}

const ExpensesStateContext = createContext(undefined);
const ExpensesDispatchContext = createContext(undefined);

export function ExpensesProvider({ children }) {
  const [state, dispatch] = useReducer(expensesReducer, initialState);
  return (
    <ExpensesDispatchContext.Provider value={dispatch}>
      <ExpensesStateContext.Provider value={state}>
        {children}
      </ExpensesStateContext.Provider>
    </ExpensesDispatchContext.Provider>
  );
}

export function useExpensesDispatch() {
  const context = useContext(ExpensesDispatchContext);
  if (!context) throw new Error("Cannot find ExpensesProvider");
  return context;
}

export function useExpensesState() {
  const context = useContext(ExpensesStateContext);
  if (!context) throw new Error("Cannot find ExpensesProvider");
  return context;
}
