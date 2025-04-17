import { useState, useEffect } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { createCanvas, deleteCanvas, getCanvases } from '../api/canvases';
import Loading from '../components/Loading';
import Button from '../components/Button';
import useApiRequest from '../hooks/useApiRequest';

function Home() {
  const [contents, setContents] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [isGridView, setIsGridView] = useState(true);

  const { isLoading, error, execute: fetchData } = useApiRequest(getCanvases);
  const { isLoading: isLoadingCreate, execute: createNewCanvas } =
    useApiRequest(createCanvas);

  useEffect(() => {
    fetchData(
      { name_like: searchInput },
      {
        onSuccess: response => setContents(response.data),
      },
    );
  }, [searchInput, fetchData]);

  const handleSearchInput = e => {
    setSearchInput(e.target.value);
  };

  const handleDeleteItem = async id => {
    //setContents(contents.filter(content => content.id !== id));
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }
    try {
      await deleteCanvas(id);
      fetchData({ name_like: searchInput });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCreateCanvas = async () => {
    // try {
    //   setIsLoadingCreate(true);
    //   await new Promise(resolver => setTimeout(resolver, 1000));
    //   await createCanvas();
    //   fetchData({ name_like: searchInput });
    // } catch (error) {
    //   alert(error.message);
    // } finally {
    //   setIsLoadingCreate(false);
    // }
    createNewCanvas(null, {
      onSuccess: fetchData(
        { name_like: searchInput },
        {
          onSuccess: response => setContents(response.data),
        },
      ),
      onError: err => alert(err.message),
    });
  };

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
        />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <div className="flex justify-end mb-6">
        <Button onClick={handleCreateCanvas} loading={isLoadingCreate}>
          등록하기
        </Button>
      </div>
      {isLoading && <Loading />}
      {error && (
        <Error
          message={error.message}
          onRetry={() => fetchData({ name_like: searchInput })}
        />
      )}
      {!isLoading && !error && (
        <CanvasList
          filterContents={contents}
          searchInput={searchInput}
          isGridView={isGridView}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </>
  );
}

export default Home;
