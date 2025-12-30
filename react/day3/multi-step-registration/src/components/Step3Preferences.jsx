export default function Step3Preferences({ data, setData, back }) {
  return (
    <>
      <select
        value={data.theme}
        onChange={(e) => setData({ ...data, theme: e.target.value })}
      >
        <option value="">Select Theme</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={data.notifications}
          onChange={(e) =>
            setData({ ...data, notifications: e.target.checked })
          }
        />
        Enable Notifications
      </label>

      <h3>Review Data</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={back}>Back</button>
      <button onClick={() => alert("Form Submitted!")}>Submit</button>
    </>
  );
}
