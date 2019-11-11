// import React from 'react'

export default [
    {
        name: 'Acid Splash',
        school: 'conjuration',
        ritual: false,
        level: 'cantrip',
        castingTime: '1 action',
        range: '60 feet',
        components: 'V, S',
        duration: 'Instantaneous',
        spell: [
            "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
            "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
        ],
        higherLevel:'',
        classes: ['', 'Sorcerer', 'Wizard']
    },
    {
        name: 'Aid',
        school: 'abjuration',
        ritual: false,
        level: '2nd',
        castingTime: '1 action',
        range: '30 feet',
        components: 'V, S, M (a tiny strip of white cloth)',
        duration: '8 hours',
        spell: ["Your spell bolsters your allies with toughness and resolve. Choose up to three cretures within range. Each target's hit point maximum and current hit points increase by 5 for the duration."],
        higherLevel: "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
        classes: ['', 'Cleric', 'Paladin']
    },
    {
        name: 'Alarm',
        school: 'abjuration',
        ritual: true,
        level: '1st',
        castingTime: '1 minute',
        range: '30 feet',
        components: 'V, S, M (a tiny bell and a piece of fine silver wire)',
        duration: '8 hours',
        spell: ["You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.", "A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.", "An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."],
        higherLevel: '',
        classes: ['', 'Ranger', 'Wizard']
    },
    {
        name: 'Alter Self',
        school: 'transmutation',
        ritual: false,
        level: '2nd',
        castingTime: '1 action',
        range: 'self',
        components: 'V, S',
        duration: 'Concentration, up to 1 hour',
        spell: ["You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.", "Aquatic Adaptation. You can adapt your body to an aquatic environment, sprouting gills, and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.", "Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.", "Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgoening, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."],
        higherLevel: '',
        classes: ['', 'Sorcerer', 'Wizard']
    },
    {
        name: 'Animal Friendship',
        school: 'enchantment',
        ritual: false,
        level: '1st',
        castingTime: '1 action',
        range: '30 feet',
        components: 'V, S, M (a morsel of food)',
        duration: '24 hours',
        spell: ["This spell lets you convince a neast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends."],
        higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
        classes: ['', 'Bard', 'Druid', 'Ranger']
    },
    {
        name: 'Animal Messenger',
        school: 'enchantment',
        ritual: true,
        level: '2nd',
        castingTime: '1 action',
        range: '30 feet',
        components: 'V, S, M (a morsel of food)',
        duration: '24 hours',
        spell: ["By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you mus have visited, and a recipient who matches a general description, such as 'a man or woman dressed in the uniform of the town guard' or 'a red-haired dwarf wearing a pointed hat.' You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.", "When the messenger arrives, it delivers your message to the creature that you desccibed, replicating the sound of your voice. The messenger speaks only to a creature matching the dscription you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell."],
        higherLevel: "If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.",
        classes: ['']
    },
    {
        name: 'Animal Shapes',
        school: 'transmutation',
        ritual: false,
        level: '8th',
        castingTime: '1 action',
        range: '30 feet',
        components: 'V, S',
        duration: 'Concentration, up to 24 hours',
        spell: ["Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms.", "The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage deosn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells.", "The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Animate Dead',
        school: 'necromancy',
        ritual: false,
        level: '3rd',
        castingTime: '1 mintue',
        range: '10 feet',
        component: 'V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)',
        duration: 'Instantaneous',
        spell: ["This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics).", "On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creture is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until the task is complete.", "The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creture for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you ahve animated with this spell, rather than animating a new one."],
        higherLevel: "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones.",
        classes: ['']
    },
    {
        name: 'Animate Objects',
        school: 'transmutation',
        ritual: false,
        level: '5th',
        castingTime: '1 action',
        range: '120 feet',
        component: 'V, S',
        duration: 'Concentration, up to 1 minute',
        spell: ["Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.", "As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.", "An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carriers over to its original object form.", "If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attackbonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form"],
        higherLevel: "If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th",
        classes: ['']
    },
    {
        name: 'Antilife Shell',
        school: 'abjuration',
        ritual: false,
        level: '5th',
        castingTime: '1 action',
        range: 'Self (10-foot radius)',
        components: 'V, S',
        duration: 'concentration, up to 1 hour',
        spell: ["A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration", "The barrier prevents an affected creature from passing or reaching through. An afffected creature can cast spells or make attacks with ranged or reach weapons through the barrier", "If you move so that an affected creature is forced to pass through the barrier, the spell ends."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Antimagic Field',
        school: 'abjuration',
        ritual: false,
        level: '8th',
        castingTime: '1 action',
        range: 'Self (10-foot radius sphere)',
        components: 'V, S, M (a pinch of powdered iron or iron filings)',
        duration: 'Concentration, up to 1 hour',
        spell: ["A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.", "Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.", "Targeted Effects. Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target.", "Areas of Magic. The area of another spell or magical effect, such as fireball, can't extend into the sphere. If the sphere overlaps an area of agic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough.", "Spells. Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it", "Magic Items. The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword.", "A magic weapon's properties and powers are suppressed if it is used against a target in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits.", "Magical Travel. Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere.", "Creatures and Objects. A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere", "Dispel Magic. Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagicfield spells don't nullify each other"],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Antipahy/Sympathy',
        school: 'enchantment',
        ritual: false,
        level: '8th',
        castingTime: '1 hour',
        range: '60 feet',
        components: 'V, S, M (either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)',
        duration: '10 days',
        spell: ["This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube, Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the secified creatures for the duration. Choose antipathy or sympathy as the aura's effect.", "Antipathy. The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While firghtened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves ithin 60 feet of it.", "Sympathy. The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When hte creature has done so, it can't willingly move away from the target.", "If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below.", "Ending the Effect. If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by hte spell is allowed another Wisdom saving throw every 24 hours while the spell persists.", "A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again."],
        higherLevel:'',
        classes:['']
    },
    {
        name: 'Arcane Eye',
        school: 'conjuration',
        ritual: false,
        level: '6th',
        castingTime: '1 action',
        range: '500 feet',
        components: 'V, S',
        duration: 'concentration, up to 10 minutes',
        spell: ["You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.", "The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpindicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal.", "Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Arcane Lock',
        school: 'abjuration',
        ritual: false,
        level: '2nd',
        castingTime: '1 action',
        range: 'Touch',
        components: 'V, S, M (gold dust worth at least 25 gp, which the spell consumes)',
        duration: 'Until dispelled',
        spell: ["You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.", "While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Armor of Agathys',
        school: 'abjuration',
        ritual: false,
        level: '1st',
        castingTime: '1 action',
        range: 'Self',
        components: 'V, S, M (a cup of water)',
        duration:'1 hour',
        spell: ["A protective force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage."],
        higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, bot the temporary hit points and the cold damage increase by 5 for each slot level above 1st.",
        classes: ['']
    },
    {
        name: 'Arms of Hadar',
        school: 'conjuration',
        ritual: false,
        level: '1st',
        castingTime: '1 action',
        range: 'Self (10-foot radius)',
        components: 'V, S',
        duration: 'Instantaneous',
        spell: ["You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect."],
        higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot above 1st.",
        classes:['']
    },
    {
        name: 'Astral Projection',
        school: 'necromancy',
        ritual: false,
        level: '9th',
        castingTime: '1 hour',
        range: '10 feet',
        components: 'V, S, M (for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes)',
        duration: 'Special',
        spell: ["You and up to eight willing creaures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age.", "Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut-something that can happen only when an effect specifically states that it does-your sould and body are seperated, killing you instantly.", "Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting the spell, your body and possissions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a seperate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it", " The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation.", "If you are returned to your body prematurely, your companions remain in their astral forms and must find thier own way back to their bodies, usually by dropping to 0 hit points."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Augury',
        school: 'divination',
        ritual: true,
        level: '2nd',
        castingTime: '1 minute',
        range: 'Self',
        components: 'V, S, M (Specially marked sticks, bones, or similar tokens worth at least 25 gp)',
        duration: 'Instantaneous',
        spell: ["By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or emploing some other divinging tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:","Weal, for good results", "Woe, for bad results", "Weal and woe, for both good and bad results", "Nothing, for results that aren't especially good or bad", "The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.", "If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Aura of Life',
        school: 'abjuration',
        ritual: false,
        level: '4th',
        castingTime: '1 action',
        range: 'Self (30-foot radius)',
        components: 'V',
        duration: 'Concentration, up to 10 minutes',
        spell: ["Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Aura of Purity',
        school: 'abjuration',
        ritual: false,
        level: '4th',
        castingTime: '1 action',
        range: 'Self (30-foot radius)',
        components: 'V',
        duration: 'Concentration, up to 10 minutes',
        spell: ["Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Aura of Vitality',
        school: 'evocation',
        ritual: false,
        level: '3rd',
        castingTime: '1 action',
        range: 'Self(30-foot radius)',
        components: 'V',
        duration: 'Concentration, up to 1 minute',
        spell: ["Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Awaken',
        school: 'transmutation',
        ritual: false,
        level: '5th',
        castingTime: '8 hours',
        range: 'Touch',
        components: 'V, S, M (an agate worth at least 1,000 gp, which the spell consumes)',
        duration: 'Instantaneous',
        spell: ["After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast of plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics for the awakened shrub or the awakened tree.", "The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed."],
        higherLevel: '',
        classes: ['']
    }
    {
        name: 'Bane',
        school: 'enchantment',
        ritual: false,
        level: '1st',
        castingTime: '1 action',
        range: '30 feet',
        components: 'V, S, M (a drop of blood)',
        duration: 'Concentration, up to 1 minute',
        spell: ["Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw."],
        higherLevel: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
        classes: ['']
    },
    {
        name: 'Banishing Smite',
        school: 'abjuration',
        ritual: false,
        level: '5th',
        castingTime: '1 bonus action',
        range: 'Self',
        components: 'V',
        duration: 'Concentration, up to 1 minute',
        spell: ["The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space if occupied."],
        higherLevel: '',
        classes: ['']
    }
    {
        name: 'Banishment',
        school: 'abjuration',
        ritual: false,
        level: '4th',
        castingTime: '1 action',
        range: '60 feet',
        components: 'V, S, M (an item distasteful to the target)',
        duration: 'Concentration, up to 1 minute',
        spell: ["You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished.", "If the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return."],
        higherLevel: "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
        classes: ['']
    }
    {
        name: 'Barkskin',
        school: 'transmutation',
        ritual: false,
        level: '2nd',
        castingTime: '1 action',
        range: 'Touch',
        components: 'V, S, M (a handful of oak bark)',
        duration: 'Concentration, up to 1 hour',
        spell: ["You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."],
        higherLevel: '',
        classes: ['']
    }
    {
        name: 'Beacon of Hope',
        school: 'abjuration',
        ritual: false,
        level: '3rd',
        castingTime: '1 action',
        range: '30 feet',
        components: 'V, S',
        duration: 'Concentration, up to 1 minute',
        spell: ["This spell bestows hope and vitality. Choose any number of cretures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."],
        higherLevel: '',
        classes: ['']
    },
    {
        name: 'Beast Sense',
        school: 'divination',
        ritual: true,
        level: '2nd',
        castingTime: '1 action',
        range: 'Touch',
        components: 'S',
        duration: 'Concentration, up to 1 hour',
        spell: ["You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beast's senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings."],
        higherLevel:'',
        classes: ['']
    }
    {
        name: 'Bestow Curse',
        school: 'necromancy',
        ritual: false,
        level: '3rd',
        castingTime: '1 action',
        range: 'Touch',
        components: 'V, S',
        duration: 'Concentration, up to 1 minute',
        spell: ["You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:", "Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.", "While cursed, the target has disadvantage on attack rolls against you.", "While cursed, the target has disadvantage on attack rolls against you.", "While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.", "While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.", "A remove curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect."],
        higherLevel: "If you cast this spell using a spellslot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.",
        classes: ['']
    },
    {
        name: "Bigby's Hand",
        school: 'evocation',
        ritual: false,
        level: '5th',
        castingTime: '1 action',
        range: '120 feet',
        components: 'V, S, M (an eggshell and a snakeskin glove)',
        duration: 'Concentration, up to 1 minute',
        spell: ["You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.", "The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has Strength of 26(+8) and a Dexterity of 10(+0). The hand doesn't fill its space.", "When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.", "Clenched Fist. The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your games statistics. On a hit, the target takes 4d8 force damage.", "Forceful Hand. The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.", "Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting modifier.", "Interposing Hand. The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target."],
        higherLevel: "When you cast the spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th.",
        classes: ['']
    },{
        name: 'Blade Barrier',
        school: 'evocation',
        ritual: false,
        level: '6th',
        castingTime: '1 action',
        range: '90 feet',
        components: 'V, S',
        duration: 'Concentration, up to 10 minutes',
        spell: ["You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.", "When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage."],
        higherLevel: '',
        classes: ['']
    }
    {
        name: ''
        school:
        ritual:
        level:
        castingTime:
        range:
        components:
        duration:
        spell:
        higherLevel:
        classes:
    }
    {
        name:
        school:
        ritual:
        level:
        castingTime:
        range:
        components:
        duration:
        spell:
        higherLevel:
        classes:
    }
]