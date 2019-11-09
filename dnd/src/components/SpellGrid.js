import React, { useState, useContext } from 'react';

import { OptionsContext } from '../contexts/OptionsContext';

import SpellCard from './SpellCard';

const SpellGrid = () => {
    const { spells, addOption } = useContext(OptionsContext)
    const [displaySpells, setDisplaySpells] = useState(spells);

    const handleClassChanges = event => {
        setDisplaySpells(spells.filter(spell => spell.classes.includes(event.target.value)))
    }

    return (
        <div>
            <form>
            <select onChange={handleClassChanges}>
                <option value=''>All</option>
                <option value="Barbarian">Barbarian</option>
                <option value="Bard">Bard</option>
                <option value="Cleric">Cleric</option>
                <option value="Druid">Druid</option>
                <option value="Fighter">Fighter</option>
                <option value="Monk">Monk</option>
                <option value="Paladin">Paladin</option>
                <option value="Ranger">Ranger</option>
                <option value="Rogue">Rogue</option>
                <option value="Sorcerer">Sorcerer</option>
                <option value="Warlock">Warlock</option>
                <option value="Wizard">Wizard</option>        
            </select>
            </form>
            {displaySpells.map(spell => (
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