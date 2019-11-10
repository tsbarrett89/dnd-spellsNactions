import React, { useContext } from 'react';

import { CharacterContext } from '../contexts/CharacterContext';

import CharacterOptionCard from './CharacterOptionCard';
import { BottomContent } from '../styling'

const CharacterGrid = () => {
    const { characterOptions } = useContext(CharacterContext)
    
    return(
        <BottomContent>
            <h2>Character Spells</h2>
            {characterOptions.map(option => (
                <CharacterOptionCard
                    key={option.name}
                    spell={option}
                />
            ))}
        </BottomContent>
    )
}

export default CharacterGrid