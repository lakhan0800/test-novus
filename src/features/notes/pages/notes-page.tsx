import { useState } from "react";
import "./notes-page.css";

export function NotesPage() {
  const [notes, setNotes] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  function addNote() {
    if (!current.trim()) return;
    setNotes((s) => [current.trim(), ...s]);
    setCurrent("");
  }

  function deleteNote(index: number) {
    setNotes((s) => s.filter((_, i) => i !== index));
  }

  function saveNote(index: number) {
    // For UI-only page we simulate save by marking the note (or you can wire this to API)
    const note = notes[index];
    // Example behavior: move saved note to the bottom
    setNotes((s) => {
      const copy = [...s];
      copy.splice(index, 1);
      return [...copy, note + " (saved)"];
    });
  }

  return (
    <div className="notes-page">
      <h1>Notes</h1>

      <div className="notes-input-row">
        <input
          className="notes-input"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          placeholder="Write a note..."
        />
        <button className="btn add" onClick={addNote}>
          Add note
        </button>
      </div>

      <div className="notes-list">
        {notes.length === 0 && <p className="notes-empty">No notes yet</p>}
        {notes.map((n, idx) => (
          <div className="note-row" key={idx}>
            <div className="note-text">{n}</div>
            <div className="note-actions">
              <button className="btn delete" onClick={() => deleteNote(idx)}>
                Delete
              </button>
              <button className="btn save" onClick={() => saveNote(idx)}>
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesPage;
