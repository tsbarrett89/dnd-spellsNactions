import React, { useContext } from 'react';

import { CharacterContext } from '../contexts/CharacterContext';

import CharacterOptionCard from './CharacterOptionCard';

const CharacterGrid = () => {
    const { characterOptions } = useContext(CharacterContext)
    
    return(
        <div>
            <h2>Character Spells</h2>
            {characterOptions.map(option => (
                <CharacterOptionCard
                    key={option.name}
                    {...option}
                />
            ))}
        </div>
    )
}

export default CharacterGrid