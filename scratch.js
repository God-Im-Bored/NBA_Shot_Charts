


      // THIS WORKS KINDA -->

      // useEffect(() => {
      //   async function fetchData() {
      //     const response = await fetch("http://localhost:5000/players");
      //     const playersList = await response.json();
      //     setPlayer(playersList);
      //     console.log(111, playersList)
      //   }
      //   fetchData();
      // }, []);


      // useEffect(() => {
      //   fetch("http://localhost:5000/api").then((response) =>
      //     response.json().then((data) => {
      //       console.log(111, data)
      //       console.log(222, setStats(data))
      //     })
      //   );
      // }, []);

      from nba_api.stats.endpoints import shotchartdetail
import json
import pandas as pd



response = shotchartdetail.ShotChartDetail(
  team_id = 0,
  player_id = 'player_id',
  
)

data = json.loads(response.get_json())


     


    