import React, { useState, useContext } from 'react';

import { OptionsContext } from '../contexts/OptionsContext';

import SpellCard from './SpellCard';
import { SpellGridStyled, BottomContent } from '../styling'

const SpellGrid = () => {
    const { spells, addOption } = useContext(OptionsContext)
    const [displaySpells, setDisplaySpells] = useState(spells);

    const handleClassChanges = event => {
        setDisplaySpells(spells.filter(spell => spell.classes.includes(event.target.value)))
    }

    const handleLevelChanges = event => {
        setDisplaySpells(spells.filter(spell => spell.level.includes(event.target.value)))
    }

    return (
        <BottomContent>
            <form>
                <label htmlFor="classSelector">Class</label>
                <select name="classSelector" onChange={handleClassChanges}>
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
                <select name="levelSelector" onChange={handleLevelChanges}>
                    <option value='cantrip'>Cantrip</option>
                    <option value='1st'>1st</option>
                    <option value='2nd'>2nd</option>
                    <option value='3rd'>3rd</option>
                    <option value='4th'>4th</option>
                    <option value='5th'>5th</option>
                    <option value='6th'>6th</option>
                    <option value='7th'>7th</option>
                    <option value='8th'>8th</option>
                    <option value='9th'>9th</option>

                </select>
            </form>
            <SpellGridStyled>
                {displaySpells.map(spell => (
                    <SpellCard
                        key={spell.name}
                        spell={spell}
                        addOption={addOption}
                    />
                ))}    
            </SpellGridStyled>
        </BottomContent>
    )
}

export default SpellGrid