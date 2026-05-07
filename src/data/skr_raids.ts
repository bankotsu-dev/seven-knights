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
    comps: [
        {
            name: "SPEED CLEAR",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Stun Immunity",
                url: "sieg",
                img: "sieg/Sieg.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero2: {
                role: "Burn Immunity",
                url: "ryan",
                img: "ryan/Ryan.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero3: {
                role: "Debuffer",
                url: "rachel",
                img: "rachel/Rachel.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero4: {
                role: "Buffer",
                url: "biscuit",
                img: "biscuit/Biscuit.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero5: {
                role: "DPS",
                url: "shane",
                img: "shane/Shane.webp",
                icnSet: "Icn_Avenger.webp"
            },
        },
        {
            name: "T15",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Stun Immunity",
                url: "sieg",
                img: "sieg/Sieg.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero2: {
                role: "Burn Immunity",
                url: "yui",
                img: "yui/Yui.webp",
                icnSet: "Icn_Paladin.webp"
            },
            hero3: {
                role: "Debuffer",
                url: "rachel",
                img: "rachel/Rachel.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero4: {
                role: "Buffer",
                url: "biscuit",
                img: "biscuit/Biscuit.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero5: {
                role: "DPS",
                url: "shane",
                img: "shane/Shane.webp",
                icnSet: "Icn_Avenger.webp"
            },
        },
        {
            name: "T10",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Stun Immunity",
                url: "evan",
                img: "evan/Evan.webp",
                icnSet: "Icn_Guardian.webp"
            },
            hero2: {
                role: "Burn Immunity",
                url: "yui",
                img: "yui/Yui.webp",
                icnSet: "Icn_Paladin.webp"
            },
            hero3: {
                role: "Debuffer",
                url: "rachel",
                img: "rachel/Rachel.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero4: {
                role: "Buffer",
                url: "biscuit",
                img: "biscuit/Biscuit.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero5: {
                role: "DPS",
                url: "shane",
                img: "shane/Shane.webp",
                icnSet: "Icn_Assassin.webp"
            },
        },
        {
            name: "PRE SHANE / EARLY GAME",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Stun Immunity",
                url: "evan",
                img: "evan/Evan.webp",
                icnSet: "Icn_Guardian.webp"
            },
            hero2: {
                role: "Burn Immunity",
                url: "yui",
                img: "yui/Yui.webp",
                icnSet: "Icn_Paladin.webp"
            },
            hero3: {
                role: "Debuffer",
                url: "rachel",
                img: "rachel/Rachel.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero4: {
                role: "DEF DOWN",
                url: "ace",
                img: "ace/Ace.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero5: {
                role: "DPS",
                url: "jupi",
                img: "jupi/Jupi.webp",
                icnSet: "Icn_Assassin.webp"
            },
        },
        {
            name: "PRE SHANE / EARLY GAME",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Stun Immunity",
                url: "sieg",
                img: "sieg/Sieg.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero2: {
                role: "Burn Immunity",
                url: "yui",
                img: "yui/Yui.webp",
                icnSet: "Icn_Vanguard.webp"
            },
            hero3: null,
            hero4: null,
            hero5: {
                role: "DPS",
                url: "shane",
                img: "shane/Shane.webp",
                icnSet: "Icn_Avenger.webp"
            },
        }
    ],
    otherHeroes: [
        {
            role: "T9/T10 SOLO FARMER",
            url: "fai",
            img: "fai/Fai.webp",
            icnSet: "Icn_Avenger.webp"
        },
        {
            role: "T9/T10 SOLO FARMER",
            url: "lu-bu",
            img: "lu-bu/Lu_Bu.webp",
            icnSet: "Icn_Avenger.webp"
        },
        {
            role: "T9/T10 SOLO FARMER",
            url: "trude",
            img: "trude/Trude.webp",
            icnSet: "Icn_Avenger.webp"
        },
        {
            role: "T9/T10 SOLO FARMER",
            url: "bai-long",
            img: "bai-long/Bai_Long.webp",
            icnSet: "Icn_Avenger.webp"
        },
        {
            role: "T9/T10 SOLO FARMER",
            url: "fai",
            img: "fai/Fai.webp",
            icnSet: "Icn_Avenger.webp"
        }
    ]
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