import { useEffect, useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';

function CanvasTitle({ name, onChange }) {
  const [editStatus, setEditStatus] = useState(false);
  const [title, setTitle] = useState(name);

  useEffect(() => {
    setTitle(name);
  }, [name]);

  const handleEditDone = () => {
    setEditStatus(false);
    onChange(title);
  };

  return (
    <div className="flex items-center justify-center mb-10">
      {editStatus ? (
        <div className="flex items-center">
          <input
            type="text"
            className="text-4xl font-bold text-center text-blue-600 bg-transparent border-b-2 border-blue-600 focus:outline-none"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <button
            className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Save title"
            onClick={handleEditDone}
          >
            <FaCheck />
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <h1 className="text-4xl font-bold text-center ">{title}</h1>
          <button
            className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            aria-label="Edit title"
            onClick={() => setEditStatus(true)}
          >
            <FaEdit />
          </button>
        </div>
      )}
    </div>
  );
}

export default CanvasTitle;
