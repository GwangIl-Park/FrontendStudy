import { useState, useCallback } from 'react';

export default function useApiRequest(apiFunction) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const execute = useCallback(
    async (params, { onSuccess, onError }) => {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise(resolver => setTimeout(resolver, 1000));
        // const data = await fetch('http://localhost:8000/canvases')
        //   .then(res => res.json())
        //   .catch(console.error);
        const response = await apiFunction(params);
        if (onSuccess) onSuccess(response);
      } catch (err) {
        setError(err);
        if (onError) onError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [apiFunction],
  );
  return { isLoading, error, execute };
}
