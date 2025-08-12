import React from 'react'

export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h5>Transactions</h5>
      <ul className="list-group">
        {transactions.length === 0 && <li className="list-group-item">No transactions yet</li>}
        {transactions.map(tx => (
          <li
            key={tx.id}
            className={
              'list-group-item d-flex justify-content-between align-items-center ' +
              (tx.type === 'income' ? 'list-group-item-success' : 'list-group-item-light')
            }
          >
            <div>
              <strong>{tx.description}</strong> <small className="text-muted">({tx.category})</small><br />
              <small className="text-muted">{tx.type}</small>
            </div>

            <div>
              <span className="me-3">{tx.type === 'income' ? '+' : '-'}₹{tx.amount.toFixed(2)}</span>
              <button className="btn btn-sm btn-outline-danger" onClick={() => deleteTransaction(tx.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
