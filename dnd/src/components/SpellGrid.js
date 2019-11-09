import React, { useContext } from 'react';

import { OptionsContext } from '../contexts/OptionsContext';

import SpellCard from './SpellCard';

const SpellGrid = () => {
    const { spells, addOption } = useContext(OptionsContext)

    return (
        <div>
            {spells.map(spell => (
                <SpellCard
                    key={spell.name}
                    spell={spell}
                    addOption={addOption}
                />
            ))}
            
        </div>
    )
}

export default SpellGrid