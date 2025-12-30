import { useState } from "react";
import Step1Personal from "./components/Step1Personal";
import Step2Account from "./components/Step2Account";
import Step3Preferences from "./components/Step3Preferences";
import Progress from "./components/Progress";

export default function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    theme: "",
    notifications: false,
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="container">
      <h2>Multi-Step Registration</h2>

      <Progress step={step} />

      {step === 1 && (
        <Step1Personal data={formData} setData={setFormData} next={next} />
      )}

      {step === 2 && (
        <Step2Account
          data={formData}
          setData={setFormData}
          next={next}
          back={back}
        />
      )}

      {step === 3 && (
        <Step3Preferences
          data={formData}
          setData={setFormData}
          back={back}
        />
      )}
    </div>
  );
}
