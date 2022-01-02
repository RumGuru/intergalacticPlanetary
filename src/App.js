import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PlanetList from './components/PlanetList';
import PlanetPage from './components/PlanetPage';

function App() {
  const [planetData , setPlanetData] = useState(null);
  const [loadingSpinner , setLoadingSpinner] = useState(false);

  const fetchData = async () => {
    setLoadingSpinner(true);
    try{
      const result = await fetch('data.json');
      if (!result.ok){
        throw new Error('could not load data')
      }
      const data = await result.json();
      console.log(data);
      setPlanetData(data);
    } catch(error){
      console.log(error.message);
    }

    setLoadingSpinner(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  let planetList = <p style={{color:"white"}}>No Movies Found</p>;

  if (!loadingSpinner && planetData !== null) {
    planetList = (<PlanetList planets={planetData}/>);
  }

  if (loadingSpinner) {
    planetList=(<p style={{color:"white"}}>LOADING...</p>)
  };


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
