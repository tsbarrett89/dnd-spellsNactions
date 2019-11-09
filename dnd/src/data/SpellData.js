export default [
    {
        name: 'Acid Splash',
        school: 'conjuration',
        ritual: false,
        level: 'cantrip',
        range: '60 feet',
        components: 'V, S',
        duration: 'Instantaneous',
        spell: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
        higherLevel: "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
        classes: ['Sorcerer', 'Wizard']
    },
    {
        name: 'Aid',
        school: 'abjuration',
        ritual: false,
        level: '2nd',
        range: '30 feet',
        components: 'V, S, M (a tiny strip of white cloth)',
        duration: '8 hours',
        spell: "Your spell bolsters your allies with toughness and resolve. Choose up to three cretures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
        higherLevel: "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
        classes: ['Cleric', 'Paladin']
    },
    {
        name: 'Alarm',
        school: 'abjuration',
        ritual: true,
        level: '1st',
        range: '30 feet',
        components: 'V, S, M (a tiny bell and a piece of fine silver wire)',
        duration: '8 hours',
        spell: "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
        higherLevel: '',
        classes: ['Ranger', 'Wizard']
    }
]