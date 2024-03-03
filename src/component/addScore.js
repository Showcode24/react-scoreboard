import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addscore = () => {
  const [athlete, setAthlete] = useState('');
  const [score, setScore] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    setTimeout(() => {
      const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Cdgjyo0E51CmeinsPtgM/scores/';

      fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: athlete,
          score: parseInt(score, 10), // Added radix parameter
        }),
      })
        .then((res) => res.json())
        .then(() => {
          setLoading(false);
          navigate('/recentscores');
        });
    }, 3000);
  };

  return (
    <div className="addscore">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form_header">INPUT SCORES</h2>
        <label htmlFor="athlete">
          Athlete Name:
          <input
            type="text"
            id="athlete"
            required
            value={athlete}
            placeholder="Athlete name"
            onChange={(e) => setAthlete(e.target.value)}
          />
        </label>
        <label htmlFor="score">
          Score:
          <input
            type="number"
            id="score"
            required
            value={score}
            placeholder="Score"
            onChange={(e) => setScore(e.target.value)}
          />
        </label>
        {!loading && <button type="submit">Submit</button>}
        {loading && <button type="submit" disabled>Adding score</button>}
      </form>
    </div>
  );
};

export default Addscore;
