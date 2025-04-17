import { useState, useEffect } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { createCanvas, deleteCanvas, getCanvases } from '../api/canvases';
import Loading from '../components/Loading';
import Button from '../components/Button';
import useApiRequest from '../hooks/useApiRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import CategoryFilter from '../components/CategoryFilter';

function Home() {
  const [searchInput, setSearchInput] = useState();
  const [filter, setFilter] = useState({
    searchInput: undefined,
    category: undefined,
  });
  const [isGridView, setIsGridView] = useState(true);

  const handleFilter = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };
  //const { isLoading, error, execute: fetchData } = useApiRequest(getCanvases);
  // const { isLoading: isLoadingCreate, execute: createNewCanvas } =
  //   useApiRequest(createCanvas);

  const {
    data: contents,
    isLoading,
    error,
    reFetch,
  } = useQuery({
    queryKey: ['canvases', filter.searchInput, filter.category],
    queryFn: () =>
      getCanvases({ name_like: filter.searchInput, category: filter.category }),
    //initialData: [],
    //staleTime: 1000 * 60 * 5, //5분동안 fresh상태로 유지
    refetchOnWindowFocus: false,
  });

  const queryClient = useQueryClient();

  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: createCanvas,
    onSuccess: () => queryClient.invalidateQueries(['canvases']),
    onError: err => alert(err.message),
  });

  const { mutate: deleteCanvasMutation } = useMutation({
    mutationFn: deleteCanvas,
    onSuccess: () => queryClient.invalidateQueries(['canvases']),
    onError: err => alert(err.message),
  });

  // useEffect(() => {
  //   fetchData(
  //     { name_like: searchInput },
  //     {
  //       onSuccess: response => setContents(response.data),
  //     },
  //   );
  // }, [searchInput, fetchData]);

  const handleDeleteItem = async id => {
    // //setContents(contents.filter(content => content.id !== id));
    // if (confirm('삭제 하시겠습니까?') === false) {
    //   return;
    // }
    // try {
    //   await deleteCanvas(id);
    //   fetchData({ name_like: searchInput });
    // } catch (error) {
    //   alert(error.message);
    // }
    deleteCanvasMutation(id);
  };

  const handleCreateCanvas = async () => {
    createNewCanvas();
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
    // createNewCanvas(null, {
    //   onSuccess: fetchData(
    //     { name_like: searchInput },
    //     {
    //       onSuccess: response => setContents(response.data),
    //     },
    //   ),
    //   onError: err => alert(err.message),
    // });
  };

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex gap-2 flex-col w-full sm:flex-row">
          <SearchBar
            searchInput={filter.searchInput}
            onSearch={val => handleFilter('searchInput', val)}
          />
          <CategoryFilter
            category={filter.category}
            onChange={val => handleFilter('category', val)}
          />
        </div>
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
          onRetry={() => fetchData({ name_like: filter.searchInput })}
        />
      )}
      {!isLoading && !error && (
        <CanvasList
          filterContents={contents}
          searchInput={filter.searchInput}
          isGridView={isGridView}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </>
  );
}

export default Home;
