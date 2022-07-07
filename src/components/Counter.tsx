import { useState } from 'react';

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div data-testid="counter" className="p-4 flex items-center">
      <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => setCount(count - 1)}>
        -
      </button>
      <p className="text-xl font-semibold mx-4">{count}</p>
      <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
