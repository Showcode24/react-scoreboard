import './App.css';
import { Routes, Route } from 'react-router-dom';
import RecentScores from './component/recentscore';
import Navbar from './component/navbar';
import Addscore from './component/addScore';
import Home from './component/home';

function App() {
  return (
    <div className="App">

      <Navbar />
      {/* <RecentScores />
     <Addscore />
    <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addScore" element={<Addscore />} />
        <Route path="/recentscores" element={<RecentScores />} />

      </Routes>

    </div>
  );
}

export default App;
