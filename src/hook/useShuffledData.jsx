import { useState, useEffect } from 'react';

const useShuffledData = (data, key) => {
  const [shuffledData, setShuffledData] = useState(data);

  const shuffle = () => {
    const array = [...data];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledData(array);
  };

  useEffect(() => {
    setShuffledData(data);
  }, [data]);

  return [shuffledData, shuffle];
};

export default useShuffledData;
