import { useState, useEffect } from "react";
import "./styles.css";

function formatDate(date) {
  return new Intl.DateTimeFormat("sr-Latn-RS", {
    weekday: "short", // Pon, Uto, Sre, itd.
    year: "numeric",
    month: "short", // jan, feb, mart...
    day: "numeric",
  }).format(date);
}

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + count);
    setDate(newDate);
  }, [count]);

  const handleStepPlus = () => setStep((prev) => prev + 1);
  const handleStepMinus = () => setStep((prev) => (prev > 0 ? prev - 1 : 0));

  const handleCountPlus = () => setCount((prev) => prev + step);
  const handleCountMinus = () => setCount((prev) => prev - step);

  return (
    <div className="counter">
      <h1 className="title">Brojač dana</h1>

      <div className="controls">
        <div className="control">
          <button onClick={handleStepMinus}>-</button>
          <span>Korak: {step}</span>
          <button onClick={handleStepPlus}>+</button>
        </div>

        <div className="control">
          <button onClick={handleCountMinus}>-</button>
          <span>Vrednost: {count}</span>
          <button onClick={handleCountPlus}>+</button>
        </div>
      </div>

      <p className="result">
        {count !== 0 && (
          <>
            <span>
              {count > 0
                ? `Za ${count} dana biće: `
                : `${-count} dana ranije bilo je:`}
            </span>
            <strong>{formatDate(date)}</strong>
          </>
        )}
      </p>
    </div>
  );
}
