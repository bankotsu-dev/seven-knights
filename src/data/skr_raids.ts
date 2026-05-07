export const destroyerGaze = {
    name: "Destroyer Gaze",
    image: "/7knights/raid/destroyer-gaze/Destroyer_Gaze.webp",
    basic_attack: {
        name: "Basic Attack",
        image: "/7knights/raid/destroyer-gaze/basic_attack.webp",
        effects: [
            {
                desc: "2 Enemies",
                effects: ["Deals magic damage 2 time(s)."]
            }
        ]
    },
    skill_1: {
        name: "Breath of Destruction",
        image: "/7knights/raid/destroyer-gaze/skill_1.webp",
        cd: 46,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals magic damage 2 time(s).",
                    "Inflict Burn."
                ]
            }
        ]
    },
    skill_2: {
        name: "Destructive Earthquake",
        image: "/7knights/raid/destroyer-gaze/skill_2.webp",
        cd: 54,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals magic damage 2 time(s).",
                    "Inflict Burn.",
                    "Inflict Stun."
                ]
            }
        ]
    },
    skill_3: {
        name: "Gales of Destruction",
        image: "/7knights/raid/destroyer-gaze/skill_3.webp",
        cd: 78,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals magic damage 1 time(s).",
                    "Deals additional magic damage against targets inflicted with [Burn]."
                ]
            }
        ]
    },
    passive: {
        name: "Vengeful Gaze",
        image: "/7knights/raid/destroyer-gaze/passive.webp",
        effects: [
            {
                desc: "Self",
                effects: [
                    "Grants Magic Resistance. [Always Active].",
                    "Grants Ramping Attack Boost. [Increases All Attack every turn] [Always Active]."
                ]
            }
        ]
    },
    comps: [],
    otherHeroes: []
}

export const oxKing = {
    name: "Ox King",
    image: "/7knights/raid/ox-king/Ox_King.webp",
    basic_attack: {
        name: "Basic Attack",
        image: "/7knights/raid/ox-king/basic_attack.webp",
        effects: [
            {
                desc: "3 Enemies",
                effects: [
                    "Deals magic damage 1 time(s).",
                    "Inflict Petrify."
                ]
            }
        ]
    },
    skill_1: {
        name: "Bellowing Rage",
        image: "/7knights/raid/ox-king/skill_1.webp",
        cd: 90,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals magic damage 1 time(s).",
                    "Inflict Bleed."
                ]
            },
            {
                desc: "All Allies",
                effects: [
                    "Summons Red Boil."
                ]
            }
        ]
    },
    skill_2: {
        name: "Big Bang",
        image: "/7knights/raid/ox-king/skill_2.webp",
        cd: 50,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals magic damage 1 time(s).",
                    "Inflict Bleed."
                ]
            }
        ]
    },
    skill_3: {
        name: "Binding Boulders",
        image: "/7knights/raid/ox-king/skill_3.webp",
        cd: 100,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals magic damage 1 time(s).",
                    "Deals additional magic damage against targets inflicted with [Bleed].",
                    "Inflict Petrify."
                ]
            }
        ]
    },
    passive: {
        name: "Tyrannical Command",
        image: "/7knights/raid/ox-king/passive.webp",
        effects: [
            {
                desc: "Self",
                effects: [
                    "Grants Damage Resistance while any Red Boil is alive. [Always Active].",
                    "Grants Damage Boost while any Red Boil is alive. [Always Active].",
                    "Grants Ramping Attack Boost. [Increases All Attack every turn] [Always Active]."
                ]
            }
        ]
    },
    comps: [],
    otherHeroes: []
}

export const ironDevourer = {
    name: "Iron Devourer",
    image: "/7knights/raid/iron-devourer/Iron_Devourer.webp",
    basic_attack: {
        name: "Basic Attack",
        image: "/7knights/raid/iron-devourer/basic_attack.webp",
        effects: [
            {
                desc: "Single Enemy",
                effects: [
                    "Deals physical damage plus defense 1 time(s).",
                    "Inflict Paralysis."
                ]
            }
        ]
    },
    skill_1: {
        name: "Devour",
        image: "/7knights/raid/iron-devourer/skill_1.webp",
        cd: 90,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals physical damage plus defense 1 time(s).",
                    "Inflict Defense Reduction."
                ]
            }
        ]
    },
    skill_2: {
        name: "Deadly Poison of the Sea",
        image: "/7knights/raid/iron-devourer/skill_2.webp",
        cd: 45,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals physical damage plus defense 2 time(s).",
                    "Inflict Deadly Poison."
                ]
            }
        ]
    },
    skill_3: {
        name: "Chokehold",
        image: "/7knights/raid/iron-devourer/skill_3.webp",
        cd: 100,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals physical damage plus defense 1 time(s).",
                    "Deals additional physical damage against targets inflicted with [Deadly Poison].",
                    "Inflict Paralysis."
                ]
            }
        ]
    },
    passive: {
        name: "Triple Heads",
        image: "/7knights/raid/iron-devourer/passive.webp",
        effects: [
            {
                desc: "Self",
                effects: [
                    "Grants Physical Resistance. [Always Active].",
                    "Grants Defense Boost when HP is 30% or higher. [Always Active].",
                    "Grants Physical Attack Boost when HP is 30% or lower. [Always Active].",
                    "Grants Ramping Attack Boost. [Increases All Attack every turn] [Always Active]."
                ]
            },
            {
                desc: "3 Enemies",
                effects: [
                    "Deals physical damage 1 time(s) upon using a basic attack 2 time(s).",
                    "Using a basic attack 2 time(s) inflict Deadly Poison."
                ]
            }
        ]
    },
    comps: [],
    otherHeroes: []
}