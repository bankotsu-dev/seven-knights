export const calistra = {
    name: "Calistra",
    image: "/7knights/raid/calistra/Calistra.webp",
    basic_attack: {
        name: "Basic Attack",
        image: "/7knights/raid/calistra/basic_attack.webp",
        effects: [
            {
                desc: "2 Enemies",
                effects: [
                    "Deals damage equal to 100% of Magic Attack 1 time(s).",
                    "100% chance to inflict Blind. [Duration: 3 Turn(s)].",
                    "Deals additional damage equal to 3,000% of Magic Attack against targets inflicted with [Blind]."
                ]
            }
        ]
    },
    skill_1: {
        name: "Twilight Judgment",
        image: "/7knights/raid/calistra/skill_1.webp",
        cd: 80,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 60% of Magic Attack 2 time(s).",
                    "Each attack has a 100% chance to inflict Burn. [Duration: 3 Turn(s)].",
                ]
            }
        ]
    },
    skill_2: {
        name: "Gales of Punishment",
        image: "/7knights/raid/calistra/skill_2.webp",
        cd: 45,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 80% of Magic Attack 2 time(s).",
                    "100% chance to inflict Blind. [Duration: 3 Turn(s)].",
                    "Deals additional damage equal to 3,000% of Magic Attack against targets inflicted with [Blind]."
                ]
            }
        ]
    },
    skill_3: {
        name: "Agent of Purification",
        image: "/7knights/raid/calistra/skill_3.webp",
        cd: 90,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 170% of Magic Attack 1 time(s).",
                    "Deals additional damage equal to 3,000% of Magic Attack against targets inflicted with [Burn]."
                ]
            }
        ]
    },
    passive: {
        name: "Trial of Insight",
        image: "/7knights/raid/calistra/passive.webp",
        effects: [
            {
                desc: "Self",
                effects: [
                    "Grants Magic Resistance. [Decreases Magic damage taken by 90%] [Always Active].",
                    "Grants Ramping Attack Boost. [Increases All Attack by 20% every turn] [Always Active]."
                ]
            }
        ]
    },
    comps: [
        {
            name: "HIGH SCORE",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Blind Immunity",
                url: "zhao-yun",
                img: "zhao-yun/Zhao_Yun.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero2: {
                role: "Burn Immunity",
                url: "ryan",
                img: "ryan/Ryan.webp",
                icnSet: "Icn_Gatekeeper.webp"
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
            }
        },
        {
            name: "STABLE CLEAR",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Blind Immunity",
                url: "zhao-yun",
                img: "zhao-yun/Zhao_Yun.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero2: {
                role: "Burn Immunity",
                url: "ryan",
                img: "ryan/Ryan.webp",
                icnSet: "Icn_Gatekeeper.webp"
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
            }
        },
        {
            name: "EARLY GAME",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Blind Immunity",
                url: "zhao-yun",
                img: "zhao-yun/Zhao_Yun.webp",
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
                icnSet: "Icn_Gatekeeper .webp"
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
            }
        }
    ],
    otherHeroes: [
        {
            role: "DPS",
            url: "jupy",
            img: "jupy/Jupy.webp",
            icnSet: "Icn_Avenger.webp"
        },
        {
            role: "Burn Immunity",
            url: "ariel",
            img: "ariel/Ariel.webp",
            icnSet: "Icn_Gatekeeper.webp"
        },
        {
            role: "Healer / Support",
            url: "lina",
            img: "lina/Lina.webp",
            icnSet: "Icn_Paladin.webp"
        }
    ]
}

export const astrea = {
    name: "Astrea",
    image: "/7knights/raid/astrea/Astrea.webp",
    basic_attack: {
        name: "Basic Attack",
        image: "/7knights/raid/astrea/basic_attack.webp",
        effects: [
            {
                desc: "2 Enemies",
                effects: [
                    "Deals damage equal to 100% of Magic Attack 1 time(s).",
                    "100% chance to inflict Petrify. [Duration: 3 Turn(s)].",
                    "Deals additional damage equal to 3,000% of Magic Attack against targets inflicted with [Petrify]."
                ]
            }
        ]
    },
    skill_1: {
        name: "Furious Rebuke",
        image: "/7knights/raid/astrea/skill_1.webp",
        cd: 90,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 45% of Magic Attack 2 time(s)."
                ]
            },
            {
                desc: "All Allies",
                effects: [
                    "Dikai Summon."
                ]
            }
        ]
    },
    skill_2: {
        name: "Ruthless Edict",
        image: "/7knights/raid/astrea/skill_2.webp",
        cd: 104,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 47% of Magic Attack 3 time(s).",
                    "Each attack has a 100% chance to inflict Bleed. [Duration: 3 Turn(s)].",
                    "Deals additional damage equal to 3,000% of Magic Attack against targets inflicted with [Petrify]."
                ]
            }
        ]
    },
    skill_3: {
        name: "Agent of Judgment",
        image: "/7knights/raid/astrea/skill_3.webp",
        cd: 72,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 85% of Magic Attack 2 time(s).",
                    "100% chance to inflict Petrify. [Duration: 3 Turn(s)].",
                    "Deals additional damage equal to 3,000% of Magic Attack against targets inflicted with [Bleed]."
                ]
            },
            {
                desc: "Back Row Enemies",
                effects: [
                    "100% chance to inflict All Attack Reduction by 24%. [Duration: 3 Turn(s)]."
                ]
            }
        ]
    },
    passive: {
        name: "Trial of Wisdom",
        image: "/7knights/raid/astrea/passive.webp",
        effects: [
            {
                desc: "Self",
                effects: [
                    "Grants Physical Resistance. [Decreases Physical damage taken by 90%] [Always Active].",
                    "Grants Ramping Attack Boost. [Increases All Attack by 20% every turn] [Always Active].",
                    "Grants Damage Resistance while any Dikai is alive. [Decreases damage taken by 90%] [Always Active].",
                    "Grants Damage Boost while any Dikai is alive. [Increases damage dealt by 40%] [Always Active]."
                ]
            }
        ]
    },
    comps: [
        {
            name: "HIGH SCORE",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "DPS",
                url: "espada",
                img: "espada/Espada.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero2: {
                role: "Bleed Immunity",
                url: "lee-joohee",
                img: "lee-joohee/Lee_Joohee.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero3: {
                role: "Cleanse",
                url: "orly",
                img: "orly/Orly.webp",
                icnSet: "Icn_Paladin.webp"
            },
            hero4: {
                role: "Buffer",
                url: "biscuit",
                img: "biscuit/Biscuit.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero5: {
                role: "SUBDPS / Petrify Immunity",
                url: "daisy",
                img: "daisy/Daisy.webp",
                icnSet: "Icn_Avenger.webp"
            }
        },
        {
            name: "STABLE CLEAR",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Petrify Immunity",
                url: "daisy",
                img: "daisy/Daisy.webp",
                icnSet: "Icn_Assassin.webp"
            },
            hero2: {
                role: "Bleed Immunity",
                url: "karon",
                img: "karon/Karon.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero3: {
                role: "Cleanse",
                url: "miho",
                img: "miho/Miho.webp",
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
                url: "espada",
                img: "espada/Espada.webp",
                icnSet: "Icn_Avenger.webp"
            }
        },
        {
            name: "EARLY GAME",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Petrify Immunity",
                url: "black-rose",
                img: "black-rose/Black_Rose.webp",
                icnSet: "Icn_Assassin.webp"
            },
            hero2: {
                role: "Bleed Immunity",
                url: "karon",
                img: "karon/Karon.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero3: {
                role: "Cleanse",
                url: "bai-jiao",
                img: "bai-jiao/Bai_Jiao.webp",
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
                url: "espada",
                img: "espada/Espada.webp",
                icnSet: "Icn_Avenger.webp"
            }
        }
    ],
    otherHeroes: [
        {
            role: "Cleanse",
            url: "lucy",
            img: "lucy/Lucy.webp",
            icnSet: "Icn_Guardian.webp"
        }
    ]
}

export const leonid = {
    name: "Leonid",
    image: "/7knights/raid/leonid/Leonid.webp",
    basic_attack: {
        name: "Basic Attack",
        image: "/7knights/raid/leonid/basic_attack.webp",
        effects: [
            {
                desc: "2 Enemies",
                effects: [
                    "Deals damage equal to 100% of Physical Attack 1 time(s).",
                    "100% chance to inflict Death. [Duration: 3 Turn(s)].",
                    "Deals additional damage equal to 3,000% of Physical Attack against targets inflicted with [Shock]."
                ]
            }
        ]
    },
    skill_1: {
        name: "Impregnable Menace",
        image: "/7knights/raid/leonid/skill_1.webp",
        cd: 70,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 80% of Physical Attack 1 time(s)."
                ]
            },
            {
                desc: "Self",
                effects: [
                    "Grants a Barrier equal to 100% of the caster's Max HP. [Duration: 20 Turn(s)]."
                ]
            }
        ]
    },
    skill_2: {
        name: "White Lightning's Warning",
        image: "/7knights/raid/leonid/skill_2.webp",
        cd: 48,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 90% of Physical Attack 1 time(s).",
                    "100% chance to inflict Death. [Duration: 3 Turn(s)].",
                    "Deals additional damage equal to 3,000% of Physical Attack against targets inflicted with [Shock]."
                ]
            }
        ]
    },
    skill_3: {
        name: "Merciful Guardian",
        image: "/7knights/raid/leonid/skill_3.webp",
        cd: 85,
        effects: [
            {
                desc: "All Enemies",
                effects: [
                    "Deals damage equal to 120% of Physical Attack 1 time(s).",
                    "100% chance to inflict Shock. [Duration: 3 Turn(s)].",
                    "Deals additional damage equal to 3,000% of Physical Attack against targets inflicted with [Death]."
                ]
            }
        ]
    },
    passive: {
        name: "Trial of Courage",
        image: "/7knights/raid/leonid/passive.webp",
        effects: [
            {
                desc: "Self",
                effects: [
                    "Grants Magic Resistance. [Decreases Magic damage taken by 90%] [Always Active].",
                    "Grants Ramping Attack Boost. [Increases All Attack by 20% every turn] [Always Active]."
                ]
            }
        ]
    },
    comps: [
        {
            name: "HIGH SCORE",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Shock Immunity",
                url: "guan-yu",
                img: "guan-yu/Guan_Yu.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero2: {
                role: "Death Immunity",
                url: "xiao",
                img: "xiao/Xiao.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero3: {
                role: "Support",
                url: "lu-bu",
                img: "lu-bu/Lu_Bu.webp",
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
                url: "bai-long",
                img: "bai-long/Bai_Long.webp",
                icnSet: "Icn_Avenger.webp"
            }
        },
        {
            name: "STABLE CLEAR",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Shock Immunity",
                url: "guan-yu",
                img: "guan-yu/Guan_Yu.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero2: {
                role: "Death Immunity",
                url: "xiao",
                img: "xiao/Xiao.webp",
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
                url: "bai-long",
                img: "bai-long/Bai_Long.webp",
                icnSet: "Icn_Avenger.webp"
            }
        },
        {
            name: "EARLY GAME",
            formation: "Protective_Formation.webp",
            hero1: {
                role: "Shock Immunity",
                url: "guan-yu",
                img: "guan-yu/Guan_Yu.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero2: {
                role: "Death Immunity",
                url: "xiao",
                img: "xiao/Xiao.webp",
                icnSet: "Icn_Avenger.webp"
            },
            hero3: {
                role: "Support",
                url: "lina",
                img: "lina/Lina.webp",
                icnSet: "Icn_Paladin.webp"
            },
            hero4: {
                role: "Buffer",
                url: "biscuit",
                img: "biscuit/Biscuit.webp",
                icnSet: "Icn_Gatekeeper.webp"
            },
            hero5: {
                role: "DPS",
                url: "bai-long",
                img: "bai-long/Bai_Long.webp",
                icnSet: "Icn_Avenger.webp"
            }
        }
    ],
    otherHeroes: [
        {
            role: "Shock Immunity",
            url: "chloe",
            img: "chloe/Chloe.webp",
            icnSet: "Icn_Gatekeeper.webp"
        },
        {
            role: "Death Immunity",
            url: "leo",
            img: "leo/Leo.webp",
            icnSet: "Icn_Gatekeeper.webp"
        },
    ]
}