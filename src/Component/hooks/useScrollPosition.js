import React, { useEffect, useState } from 'react';

export function useScrollPosition() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      );
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isBottom };
}

function App() {
  const { isBottom } = useScrollPosition();

  return (
    <div>
      <h1>Scroll to the bottom to see an image:</h1>
      {isBottom && <img src="path/to/your/image.jpg" alt="Your Image" />}
    </div>
  );
}

export default App;

