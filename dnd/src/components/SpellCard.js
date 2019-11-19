import React from 'react';

import { SpellCardStyled, SpellCardDataStyled, SpellLevel, SpellEffect, SpellButtonStyled } from '../styling'

const SpellCard = props => {
    const spellEffects = props.spell.spell;
    
    return (
        <SpellCardStyled>
            <h3>{props.spell.name}</h3>
            {props.spell.level.includes('cantrip') ? 
                (<SpellLevel>{props.spell.school} {props.spell.level}</SpellLevel>) :
                (<SpellLevel>{props.spell.level} level {props.spell.school}</SpellLevel>)
            }
            
            <SpellCardDataStyled>
                <h5>Casting Time:</h5>
                <p>{props.spell.castingTime}</p>
            </SpellCardDataStyled>
            <SpellCardDataStyled>
                <h5>Range:</h5>
                <p>{props.spell.range}</p>
            </SpellCardDataStyled>
            <SpellCardDataStyled>
                <h5>Components:</h5>
                <p>{props.spell.components}</p>
            </SpellCardDataStyled>
            <SpellCardDataStyled>
                <h5>Duration:</h5>
                <p>{props.spell.duration}</p>
            </SpellCardDataStyled>
            <SpellEffect>
            {spellEffects.map((spell, index) => (
                <p key={index}>{spell}</p>
            ))}
            </SpellEffect>
            <div>
                {props.spell.higherLevel.length > 1 &&
                    <div>
                        <h5>At Higher Levels:</h5>
                        <p>{props.spell.higherLevel}</p>
                    </div>
            }
            </div>
            <SpellButtonStyled onClick={() => props.addOption(props.spell)}>Add to Character Sheet</SpellButtonStyled>
        </SpellCardStyled>
    )
}

export default SpellCard