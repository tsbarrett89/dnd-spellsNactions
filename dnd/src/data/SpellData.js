import React from 'react'

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
        classes: ['', 'Sorcerer', 'Wizard']
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
        classes: ['', 'Cleric', 'Paladin']
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
        classes: ['', 'Ranger', 'Wizard']
    },
    {
        name: 'Alter Self',
        school: 'transmutation',
        ritual: false,
        level: '2nd',
        range: 'self',
        components: 'V, S',
        duration: 'Concentration, up to 1 hour',
        spell: "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.  Aquatic Adaptation. You can adapt your body to an aquatic environment, sprouting gills, and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.  Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.  Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgoening, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.",
        higherLevel: '',
        classes: ['', 'Sorcerer', 'Wizard']
    },
    {
        name: 'Animal Friendship',
        school: 'enchantment',
        ritual: false,
        level: '1st',
        range: '30 feet',
        components: 'V, S, M (a morsel of food)',
        duration: '24 hours',
        spell: "This spell lets you convince a neast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.",
        higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
        classes: ['', 'Bard', 'Druid', 'Ranger']
    }
]