import { useParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import { useEffect, useState } from 'react';
import { getCanvaseById, updateName } from '../api/canvases';

function CanvasDetail() {
  const { id } = useParams();
  const [canvas, setCanvas] = useState();

  useEffect(() => {
    const fetchCanvas = async () => {
      const data = await getCanvaseById(id);
      setCanvas(data);
    };
    fetchCanvas();
  }, [id]);

  const handleTitleChange = async title => {
    try {
      await updateName(id, title);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <CanvasTitle name={canvas?.name} onChange={handleTitleChange} />
      {canvas && <LeanCanvas canvas={canvas} />}
    </div>
  );
}

export default CanvasDetail;
