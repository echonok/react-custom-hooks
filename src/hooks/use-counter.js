import { useEffect, useState } from 'react';

const useCounter = (backward = false) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + backward ? -1 : 1);
    }, 1_000);

    return () => clearInterval(interval);
  }, [backward]);
  return counter;
}

export default useCounter;
