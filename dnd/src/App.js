import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { OptionsContext } from './contexts/OptionsContext';
import { CharacterContext } from './contexts/CharacterContext';

import Navigation from './components/Navigation';
import SpellData from './data/SpellData';
import SpellGrid from './components/SpellGrid';
import CharacterGrid from './components/CharacterGrid';

function App() {
  const [spells] = useState(SpellData);
  const [characterOptions, setCharacterOptions] = useState([]);

  const addOption = option => {
    setCharacterOptions([...characterOptions, option])
    console.log(characterOptions)
  }

  return (
    <div>
      <OptionsContext.Provider value={{spells, addOption}}>
        <CharacterContext.Provider value={{ characterOptions }}>
          <Navigation />
          <Router>
            <Route
              exact path="/"
              component={SpellGrid}
            />
            <Route
              path="/character"
              component={CharacterGrid}
            />
          </Router>
          
        </CharacterContext.Provider>
      </OptionsContext.Provider>
    </div>
  );
}

export default App;
