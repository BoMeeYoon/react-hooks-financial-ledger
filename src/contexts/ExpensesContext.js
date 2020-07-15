import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  expenses : [
    {
      id:1,
      category:'meal',
      title:'식사',
      content:'홍콩반점',
      amount:2000,
    },
    {
        id:2,
        category:'grocery',
        title:'식료품',
        content:'양배추',
        amount:5000,
    },
    {
        id:3,
        category:'transportation',
        title:'교통',
        content:'택시비',
        amount:200000,
    },
    {
        id:4,
        category:'living',
        title:'생활',
        content:'관리비',
        amount:100000,
    },
    {
        id:5,
        category:'medical',
        title:'의료',
        content:'병원 진료',
        amount:7000,
    }
  ],
  filter: "all",
  filterExpenses: []
}

function expensesReducer(state, action) {
  console.log(state.expenses, action.filter)
  switch(action.type) {
    case "CREATE" :
      return state.expenses.concat(action.expense);
    case "UPDATE" :
      return state.expenses.map(expense => expense.id === action.id ? expense = action.expense : expense);
    case "DELETE" :
      return state.expenses.filter(expense => expense.id !== action.id);
    case "FILTER" :
      return {
        ...state,
        filter : action.filter,
        filterExpenses : state.expenses.filter(expense => expense.category === action.filter)
      }
    default: throw new Error('error')
   }
};

const ExpensesStateContext = createContext(undefined);
const ExpensesDispatchContext = createContext(undefined);

export function ExpensesProvider({ children }) {
  const [state, dispatch] = useReducer(expensesReducer, initialState);
  return (
    <ExpensesDispatchContext.Provider value = {dispatch}>
      <ExpensesStateContext.Provider value = {state}>
        {children}
      </ExpensesStateContext.Provider>
    </ExpensesDispatchContext.Provider>
  )
}

export function useExpensesDispatch() {
  const context = useContext(ExpensesDispatchContext);
  if(!context) throw new Error("Cannot find ExpensesProvider");
  return context
};

export function useExpensesState() {
  const context = useContext(ExpensesStateContext);
  if(!context) throw new Error("Cannot find ExpensesProvider");
  return context
};

