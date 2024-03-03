import { useState, useEffect } from 'react';

const useScores = () => {
  const [scores, setScores] = useState([]);

  const fetchScores = () => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Cdgjyo0E51CmeinsPtgM/scores/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setScores(data);
      });
    // .catch((error) => {
    //   console.error('Error fetching scores:', error);
    // });
  };

  useEffect(() => {
    fetchScores();
  }, []); // empty dependency array, meaning it will only run once

  return { scores, fetchScores };
};

export default useScores;
