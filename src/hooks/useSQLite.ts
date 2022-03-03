import {useState, useEffect, useCallback} from 'react';
import {PageItem} from '../types';
import {
  createTable,
  getDBConnection,
  getPagesItems,
  savePageItems,
} from '../utils/Database/db-service';
import {initPages} from '../utils/Database/initPages';

const useSQLite = () => {
  const [pages, setPages] = useState<PageItem[]>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState(false);

  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      const storedPagesItem = await getPagesItems(db);
      if (storedPagesItem.length) {
        setPages(storedPagesItem);
        setLoading(false);
      } else {
        await savePageItems(db, initPages);
        setPages(initPages);
        setLoading(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const refetchPages = async () => {
    setError(false);
    setLoading(true);
    loadDataCallback();
  };

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  return {pages, loading, error, refetchPages};
};

export {useSQLite};
