import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PlanetList from './components/PlanetList';
import PlanetPage from './components/PlanetPage';

function App() {
  const [planetData , setPlanetData] = useState(null);

  const fetchData = async () => {
    try{
      const result = await fetch('data.json');
      if (!result){
        throw new Error('could not load data')
      }
      const data = await result.json();
      console.log(data);
      setPlanetData(data);
    } catch{
      console.log(Error);
    }

  }

  useEffect(()=>{
    fetchData();
  },[]);

  let planetList = <p>Loading</p>
  if (planetData !== null) {
    planetList = (<PlanetList planets={planetData}/>);
  }


  return (
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route path={'/mercury'}>
          {<PlanetPage/>}
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
