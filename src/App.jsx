import { useEffect, useState } from 'react'
import LeagueTable from './components/LeagueTable'

const App = () => {

  const [standings, setStandings] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/leagues/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setStandings(data);
     
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  // console.log(standings);

  return (
    <div>
       <LeagueTable standings={standings} />
    </div>
  );
}

export default App
