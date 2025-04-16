import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Note from './Note';
import { v4 as uuidv4 } from 'uuid';

function CanvasCard({ title, isSubTitle = false }) {
  const [noteList, setNoteList] = useState([]);
  const addNoteList = () => {
    setNoteList([...noteList, { id: uuidv4(), content: '' }]);
  };
  const removeNoteList = id => {
    setNoteList(noteList.filter(note => note.id !== id));
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
        {noteList.map(note => {
          return (
            <Note
              key={note.id}
              id={note.id}
              content={note.content}
              removeNoteList={removeNoteList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CanvasCard;
