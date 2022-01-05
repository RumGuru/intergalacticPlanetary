import { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Loader from 'react-loader-spinner';

import Header from './components/Header';
import PlanetList from './pages/PlanetList';
import PlanetPage from './pages/PlanetPage';


function App() {
  const [planetData , setPlanetData] = useState([]);
  const [loadingSpinner , setLoadingSpinner] = useState(false);

  const fetchData = useCallback(async () => {
    setLoadingSpinner(true);
    try{
      const result = await fetch('http://localhost:3000/data.json');
      console.log(result);
      if (!result.ok){
        throw new Error('could not load data')
      }
      const data = await result.json();
      console.log(data);

      //Add a color value to each planet

    



      const newData = data.map((planet) => {
        let color;
        switch(planet.name) {
          case 'Mercury':
            color = "White";
            break;
          case 'Venus':
            color = "#F7CC7F";
            break;
            case 'Earth':
            color = "Blue";
            break;
            case 'Mars':
            color = "#FF6A45";
            break;
            case 'Jupiter':
            color = "#ECAD7A";
            break;
            case 'Saturn':
            color = "#FCCB6B";
            break;
            case 'Uranus':
            color = "#65F0D5";
            break;
            case 'Neptune':
            color = "#497EFA";
            break;
          default:
            color='pink';
        }
        return {...planet , planetColor: color}
      });

      setPlanetData(newData);
    } catch(error){
      console.log(error.message);
    }

    setLoadingSpinner(false);
  },[]);

  useEffect(()=>{
    console.log('fetching');
    fetchData();
  },[fetchData]);

  let planetList = <p style={{color:"white"}}>No Movies Found</p>;

  if (!loadingSpinner && planetData !== []) {
    planetList = (<PlanetList planets={planetData}/>);
  }

  if (loadingSpinner) {
    planetList=(
    <div className="loadingSpinner">
<Loader type="Circles" color="white" height={80} width={80}></Loader>
      </div>)
  };


  return (
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route path={'/planets/:planetName'}>
          {<PlanetPage planets={planetData} />}
          </Route>
          <Route path={'/'}>
          {planetList}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
