import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';
import Note from './Note';

function CanvasCard({ title, isSubTitle = false, notes = [], onNotesChange }) {
  const addNoteList = () => {
    const newNote = {
      id: uuidv4(),
      content: '',
      color: '',
    };
    onNotesChange([...notes, newNote]);
  };
  const removeNoteList = id => {
    onNotesChange(notes.filter(note => note.id !== id));
  };
  const handleUpdateNote = (id, content, color) => {
    onNotesChange(
      notes.map(note => (note.id === id ? { ...note, content, color } : note)),
    );
  };

  return (
    <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
      <div
        className={`${isSubTitle === false && 'bg-gray-100 border-b border-b-gray-300'} flex items-start justify-between px-3 py-2`}
      >
        <h3 className={`${isSubTitle === false && 'font-bold'}`}>{title}</h3>
        <button
          className="bg-blue-400  text-white p-1.5 text-xs rounded-md"
          onClick={addNoteList}
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-3 min-h-32 p-3">
        {notes.map(note => {
          return (
            <Note
              key={note.id}
              id={note.id}
              content={note.content}
              color={note.color}
              removeNoteList={removeNoteList}
              onUpdateNote={handleUpdateNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CanvasCard;
