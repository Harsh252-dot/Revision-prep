export default function Progress({ step }) {
  return (
    <div className="progress">
      <span className={step >= 1 ? "active" : ""}>1</span>
      <span className={step >= 2 ? "active" : ""}>2</span>
      <span className={step >= 3 ? "active" : ""}>3</span>
    </div>
  );
}
