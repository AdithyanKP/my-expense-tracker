import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
function App() {
  return (
    <div>
      <Header />
      <div className="container"></div>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </div>
  );
}

export default App;
