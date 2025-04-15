import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';

function Home() {
  const [contents, setContents] = useState([
    {
      id: 1,
      name: '친환경 도시 농업 플랫폼',
      modifyDate: '2023-06-15',
      category: '농업',
    },
    {
      id: 2,
      name: 'AI 기반 건강 관리 앱',
      modifyDate: '2023-06-10',
      category: '헬스케어',
    },
    {
      id: 3,
      name: '온디맨드 물류 서비스',
      modifyDate: '2023-06-05',
      category: '물류',
    },
    {
      id: 4,
      name: 'VR 가상 여행 서비스',
      modifyDate: '2023-06-01',
      category: '여행',
    },
  ]);

  const [searchInput, setSearchInput] = useState('');
  const handleSearchInput = e => {
    setSearchInput(e.target.value);
  };

  const filterContents = contents.filter(content =>
    content.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const [isGridView, setIsGridView] = useState(true);

  const handleDeleteItem = id => {
    setContents(contents.filter(content => content.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
        />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <CanvasList
        filterContents={filterContents}
        searchInput={searchInput}
        isGridView={isGridView}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default Home;
