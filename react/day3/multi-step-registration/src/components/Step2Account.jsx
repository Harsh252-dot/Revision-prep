export default function Step2Account({ data, setData, next, back }) {
  return (
    <>
      <input
        placeholder="Username"
        value={data.username}
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <div className="buttons">
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
}
