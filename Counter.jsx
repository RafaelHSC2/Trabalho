import { useState } from 'react';
import './Counter.css';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h3>Contador Interativo</h3>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
          Decrementar
        </button>
        <button onClick={() => setCount(0)} disabled={count === 0}>
          Resetar
        </button>
      </div>
    </div>
  );
}