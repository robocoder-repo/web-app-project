
import { useState, useEffect } from 'react';

const cache = new Map();

export function useCache<T>(key: string, fetchFn: () => Promise<T>, ttl: number = 60000) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = cache.get(key);
        if (cachedData && Date.now() - cachedData.timestamp < ttl) {
          setData(cachedData.data);
          setLoading(false);
          return;
        }

        const result = await fetchFn();
        cache.set(key, { data: result, timestamp: Date.now() });
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key, fetchFn, ttl]);

  return { data, loading, error };
}
