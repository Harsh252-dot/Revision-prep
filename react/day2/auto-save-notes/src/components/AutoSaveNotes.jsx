import { useEffect, useState } from "react";

function AutoSaveNotes() {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("Saved ✓");

  useEffect(() => {
    if (!note) {
      setStatus("Saved ✓");
      return;
    }

    setStatus("Saving...");

    const timer = setTimeout(() => {
      console.log("Note saved:", note);
      setStatus("Saved ✓");
    }, 2000);

    return () => clearTimeout(timer);
  }, [note]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h3>Auto-save Notes</h3>

      <textarea
        rows="6"
        style={{ width: "100%", padding: "10px" }}
        placeholder="Start typing your notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <p style={{ marginTop: "8px", fontWeight: "bold" }}>
        {status}
      </p>
    </div>
  );
}

export default AutoSaveNotes;
