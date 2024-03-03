import React, { useState, useEffect } from 'react';

const RecentScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // I entered the API endpoint here
    const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Cdgjyo0E51CmeinsPtgM/scores/';

    // Fetch the recent scores from the API
    const fetchScores = () => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setScores(data.result);
        })
        .catch(error => {
          console.error('Error fetching scores:', error);
        });
    };

    fetchScores();
  }, []);

  return (
    <div className="recent">
      <h2>Recent Scores</h2>
      <table className='tabular'>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(score => (
            <tr key={score.user}>
              <td>{score.user}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentScores;
