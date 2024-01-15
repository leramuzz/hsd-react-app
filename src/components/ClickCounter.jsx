import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../app/slices/counterSlice';

function ClickCounter() {
  const count = useSelector(selectCount);

  return <div>Click count: {count}</div>;
}

export default ClickCounter;
