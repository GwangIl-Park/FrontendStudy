import { canvases } from './http';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export function getCanvases(params) {
  const payload = Object.assign(
    {
      _sort: 'lastModified',
      _order: 'desc',
    },
    params,
  );
  return canvases.get('/', { params: payload });
}

export function createCanvas() {
  const newCanvas = {
    name: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    modifyDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    category: '신규',
  };
  return canvases.post('/', newCanvas);
}

export async function deleteCanvas(id) {
  await canvases.delete(`/${id}`);
}

export async function getCanvaseById(id) {
  const { data } = await canvases.get(`/${id}`);
  return data;
}

export async function updateName(id, name) {
  await canvases.patch(`/${id}`, { name });
}
