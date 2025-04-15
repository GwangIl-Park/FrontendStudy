import CanvasItem from './CanvasItem';

function CanvasList({ filterContents, searchInput, isGridView }) {
  if (filterContents.length === 0)
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-600">
          {searchInput ? '검색 결과가 없습니다' : '목록이 없습니다'}
        </p>
      </div>
    );
  return (
    <div
      className={`grid gap-6 ${isGridView ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
    >
      {filterContents.map(item => {
        return (
          <CanvasItem
            key={item.id}
            id={item.id}
            name={item.name}
            modifyDate={item.modifyDate}
            category={item.category}
          />
        );
      })}
    </div>
  );
}

export default CanvasList;
