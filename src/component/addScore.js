import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addscore = () => {

    const [athlete, setAthlete] = useState('');
    const [score, setScore] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        // console.log(title, author, body)

        setTimeout(() => {

            // const newContent = { user, score }       //Note ={} means equals to empty object

            const postUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Cdgjyo0E51CmeinsPtgM/scores/'

            //You can either use just fetch('http://localhost:7000/contents') directly without declaring it with posturl

            fetch(postUrl, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: athlete,
                    score: parseInt(score),
            })        //newContent is representation of what you want to send to the sever
            })

                //when you are using DELETE there would be no need for the body, just the method and headers is enough

                .then((res) => {

                    res.json()
                    setLoading(false)
                    navigate('/recentscores')
                })

                .catch((err) => {
                    console.log(err)
                })
        }, 3000)
    }
    return (
        <div className="addscore">
            
            <form onSubmit={handleSubmit} className="form">
            <h2 className="form_header">INPUT SCORES</h2>
                <label>
                    
                    <input
                        type="text"
                        required
                        value={athlete}
                        placeholder="Athlete name"
                        onChange={(e) => setAthlete(e.target.value)}
                    ></input>
                </label>

                <label>
                    
                    <input
                        type="number"
                        required
                        value={score}
                        placeholder="Score"
                        onChange={(e) => setScore(e.target.value)}
                    ></input>
                </label>
                {!loading && <button type="submit">Submit</button> }    
            {loading && <button type="submit" disabled>Adding score</button> }
            </form>
        </div>
    );
}

export default Addscore;