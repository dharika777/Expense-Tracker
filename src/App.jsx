import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    setTransactions([...transactions, { text, amount: parseFloat(amount) }]);
    setText("");
    setAmount("");
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">💰 Expense Tracker</h1>

      <div className="mb-4">
        <h4>Balance: ₹{(income + expense).toFixed(2)}</h4>
        <div className="d-flex justify-content-between">
          <div className="p-3 bg-success text-white rounded">
            Income: ₹{income.toFixed(2)}
          </div>
          <div className="p-3 bg-danger text-white rounded">
            Expense: ₹{Math.abs(expense).toFixed(2)}
          </div>
        </div>
      </div>

      <form onSubmit={addTransaction} className="mb-4">
        <input
          type="text"
          placeholder="Description"
          className="form-control mb-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (+income, -expense)"
          className="form-control mb-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn btn-primary w-100">Add Transaction</button>
      </form>

      <h4>Transactions</h4>
      <ul className="list-group">
        {transactions.map((t, i) => (
          <li
            key={i}
            className={`list-group-item d-flex justify-content-between ${
              t.amount < 0 ? "list-group-item-danger" : "list-group-item-success"
            }`}
          >
            {t.text}
            <span>₹{t.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

