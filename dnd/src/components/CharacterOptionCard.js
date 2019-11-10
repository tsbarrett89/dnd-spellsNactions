import React from 'react';

import { SpellCardStyled, SpellLevel, SpellCardDataStyled, SpellEffect, CharacterGridStyled } from '../styling'

const CharacterOptionCard = props => {
    return (
        <CharacterGridStyled>
            <SpellCardStyled>
                <h3>{props.spell.name}</h3>
                <SpellLevel>{props.spell.level} level {props.spell.school}</SpellLevel>
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
                <SpellEffect>{props.spell.spell}</SpellEffect>
                {/* <SpellButtonStyled onClick={() => props.addOption(props.spell)}>Add to Character Sheet</SpellButtonStyled> */}
            </SpellCardStyled>
        </CharacterGridStyled>
    )
}

export default CharacterOptionCard