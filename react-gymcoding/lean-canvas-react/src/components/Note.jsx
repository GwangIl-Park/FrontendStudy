import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const Note = ({
  id,
  content,
  removeNoteList,
  color: initialColor,
  onUpdateNote,
}) => {
  const [localContent, setLocalContent] = useState(content);
  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];

  const [color, setColor] = useState(
    initialColor
      ? initialColor
      : colorOptions[Math.floor(Math.random() * colorOptions.length)],
  );

  const [isEditing, setIsEditing] = useState(false);

  const textAreaRef = useRef(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  const handleContentChange = () => {
    onUpdateNote(id, localContent, color);
  };

  return (
    <div
      className={`p-4 ${color} relative max-h-[32rem] overflow-hidden`}
      onClick={() => setIsEditing(true)}
    >
      <div className="absolute top-2 right-2">
        {isEditing ? (
          <button
            aria-label="Check Note"
            className="text-gray-700"
            onClick={e => {
              e.stopPropagation();
              setIsEditing(false);
            }}
          >
            <AiOutlineCheck size={20} />
          </button>
        ) : (
          <button
            aria-label="Close Note"
            className="text-gray-700"
            onClick={e => {
              e.stopPropagation();
              removeNoteList(id);
            }}
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <textarea
        value={localContent}
        ref={textAreaRef}
        onChange={e => setLocalContent(e.target.value)}
        onBlur={handleContentChange}
        className={`w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        style={{ height: 'auto', minHeight: '8rem' }}
        readOnly={!isEditing}
      />
      {isEditing && (
        <div className="flex space-x-2">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
              onClick={() => setColor(option)}
              aria-label={`Change color to ${option}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Note;
