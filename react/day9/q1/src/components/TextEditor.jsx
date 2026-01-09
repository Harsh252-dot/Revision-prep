import { useState } from 'react';

export default function TextEditor() {
  const [history, setHistory] = useState(['']);
  const [index, setIndex] = useState(0);

  const currentText = history[index];

  function handleChange(e) {
    const value = e.target.value;

    const newHistory = history.slice(0, index + 1);

    setHistory([...newHistory, value]);
    setIndex(newHistory.length);
  }

  function undo() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function redo() {
    if (index < history.length - 1) {
      setIndex(index + 1);
    }
  }

  return (
    <div className="editor">
      <textarea
        value={currentText}
        onChange={handleChange}
        placeholder="Start typing..."
      />

      <div className="controls">
        <button onClick={undo} disabled={index === 0}>
          Undo
        </button>

        <button onClick={redo} disabled={index === history.length - 1}>
          Redo
        </button>
      </div>

      <p className="history">
        History: {index + 1} / {history.length}
      </p>
    </div>
  );
}
