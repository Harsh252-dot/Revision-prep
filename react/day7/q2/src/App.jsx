import { useMemo, useState } from 'react';

function expensiveNumberAnalysis(number, counterRef) {
  counterRef.current += 1;

  const factors = [];
  let sum = 0;
  let isPrime = number > 1;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
      sum += i;
      if (i !== 1 && i !== number) {
        isPrime = false;
      }
    }
  }

  return { factors, sum, isPrime };
}

export default function App() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState('light');
  const calculationCount = useState({ current: 0 })[0];

  // 🔥 EXPENSIVE calculation
  const result = useMemo(() => {
    return expensiveNumberAnalysis(number, calculationCount);
  }, [number]);

  return (
    <div className={`container ${theme}`}>
      <h2>Number Analyzer</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>

      <p><strong>Is Prime:</strong> {result.isPrime ? 'Yes' : 'No'}</p>
      <p><strong>Factors:</strong> {result.factors.join(', ')}</p>
      <p><strong>Sum of Factors:</strong> {result.sum}</p>

      <hr />

      <p>
        <strong>Calculation Count:</strong> {calculationCount.current}
      </p>
    </div>
  );
}
