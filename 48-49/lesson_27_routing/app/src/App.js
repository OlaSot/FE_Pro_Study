import './App.css';
import NavMenu from './components/NavMenu';
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import ConfigurationsPage from './pages/ConfigurationsPage';
import TeamsPage from './pages/TeamsPage';
import { useState } from 'react';
import { Context } from './context';


function App() {

  const [teams, setTeams] = useState([])

  const [players, setPlayers] = useState([])

  const add_team = team => {
    setTeams([...teams, team])
  }

  const add_player = player => {
    setPlayers([...players, player])
  }

  const delete_player = id => setPlayers(players.filter(el => el.id !== id))

  return (
    <div>
      <Context.Provider value={{add_team, teams, players, add_player, delete_player}}>
        <NavMenu />
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/configurations_page' element={<ConfigurationsPage/>}/>
            <Route path='/teams_page' element={<TeamsPage/>}/>
          </Routes>
        </Context.Provider>
    </div>
  );
}

export default App;
