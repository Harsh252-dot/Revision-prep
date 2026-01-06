import { useRef, useState } from 'react';

export default function App() {
  const [otp, setOtp] = useState(Array(6).fill(''));


  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleClear = () => {
    setOtp(Array(6).fill(''));
    inputRefs.current[0].focus();
  };

  return (
    <div className="container">
      <h2>OTP Verification</h2>

      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>

      <button onClick={handleClear}>Clear</button>

      <p>
        <strong>Entered OTP:</strong> {otp.join('')}
      </p>
    </div>
  );
}
