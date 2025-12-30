import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");

  // ✅ Derived state (single source of truth)
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const passedCount = Object.values(rules).filter(Boolean).length;

  const borderColor =
    passedCount <= 1
      ? "red"
      : passedCount <= 3
      ? "orange"
      : "green";

  return (
    <div className="container">
      <h2>Password Strength Validator</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{ borderColor }}
      />

      <ul>
        <li className={rules.length ? "valid" : "invalid"}>
          {rules.length ? "✓" : "✗"} At least 8 characters
        </li>
        <li className={rules.uppercase ? "valid" : "invalid"}>
          {rules.uppercase ? "✓" : "✗"} One uppercase letter
        </li>
        <li className={rules.number ? "valid" : "invalid"}>
          {rules.number ? "✓" : "✗"} One number
        </li>
        <li className={rules.special ? "valid" : "invalid"}>
          {rules.special ? "✓" : "✗"} One special character
        </li>
      </ul>
    </div>
  );
}
