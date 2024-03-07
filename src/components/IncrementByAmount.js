import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from '../../features/counter/counterSlice';




function IncrementByAmount() {
  const count = useSelector((state) => state.counter.value); // Adjust if the store structure is different
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState('');

  const handleIncrement = () => {
    // Convert incrementAmount to a number and dispatch
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
    setIncrementAmount(''); // Reset the input field
  };

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleIncrement}>Increment by Amount</button>
    </div>
  );
}

export default IncrementByAmount;
