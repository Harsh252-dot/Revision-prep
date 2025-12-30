export default function Step1Personal({ data, setData, next }) {
  return (
    <>
      <input
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <button onClick={next}>Next</button>
    </>
  );
}
