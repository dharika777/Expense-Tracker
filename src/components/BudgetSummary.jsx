import React from 'react'

export default function BudgetSummary({ transactions }) {
  const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0)
  const expenses = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
  const balance = income - expenses

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Summary</h5>
        <p>Balance: <strong>₹{balance.toFixed(2)}</strong></p>
        <p>Income: <strong className="text-success">₹{income.toFixed(2)}</strong></p>
        <p>Expenses: <strong className="text-danger">₹{expenses.toFixed(2)}</strong></p>
      </div>
    </div>
  )
}
