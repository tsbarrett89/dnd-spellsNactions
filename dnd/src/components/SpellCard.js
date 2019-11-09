import React from 'react';

const SpellCard = props => {
    return (
        <div>
            <h3>{props.spell.name}</h3>
            <p>{props.spell.spell}</p>
            <button onClick={() => props.addOption(props.spell)}>Add to Character Sheet</button>
        </div>
    )
}

export default SpellCard