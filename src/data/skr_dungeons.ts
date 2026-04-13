export const dungeons = [
    {
        id: "Fire",
        name: "Fire Particle Dungeon",
        boss: "Lavahorn",
        bossImg: "Lavahorn.webp",
        effects: ["Deals PDMG", "Grants [PATK boost]"],
        comps: [
            {
                name: "STAGE-15 FREEZE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Burn Immunity",
                    url: "ryan",
                    img: "Ryan.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Freeze",
                    url: "heavenia",
                    img: "Heavenia.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Freeze",
                    url: "spike",
                    img: "Spike.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero4: {
                    role: "Freeze",
                    url: "lania",
                    img: "Lania.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Freeze",
                    url: "gelidus",
                    img: "Gelidus.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Burn Immunity",
                    url: "yui",
                    img: "Yui.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero2: {
                    role: "Barrier",
                    url: "evan",
                    img: "Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Freeze",
                    url: "lania",
                    img: "Lania.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Freeze",
                    url: "heavenia",
                    img: "Heavenia.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Burn Immunity",
                    url: "ariel",
                    img: "Ariel.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Buffer",
                    url: "victoria",
                    img: "Victoria.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero3: {
                    role: "Support",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "ST DPS",
                    url: "pascal",
                    img: "Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            }
        ],
        otherHeroes: [
            {
                role: "Support",
                url: "rosie",
                img: "Rosie.webp"
            }
        ]
    },
    {
        id: "Water",
        name: "Water Particle Dungeon",
        boss: "Giant Raindrop",
        bossImg: "Giant_Raindrop.webp",
        effects: ["Deals MDMG", "Grants [MAX HP Boost]", "Heals self upon  using 3-Man AoE"],
        comps: [
            {
                name: "STAGE-15 POISON COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Freeze Immunity",
                    url: "feng-yan",
                    img: "Feng_Yan.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Poison",
                    url: "jane",
                    img: "Jane.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Poison",
                    url: "cleo",
                    img: "Cleo.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Poison",
                    url: "bai-jiao",
                    img: "Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Freeze Immunity",
                    url: "feng-yan",
                    img: "Feng_Yan.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Barrier",
                    url: "evan",
                    img: "Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Poison",
                    url: "jane",
                    img: "Jane.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Poison",
                    url: "bai-jiao",
                    img: "Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Freeze Immunity",
                    url: "feng-yan",
                    img: "Feng_Yan.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Unable to Recover",
                    url: "chloe",
                    img: "Chloe.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "ST DPS",
                    url: "pascal",
                    img: "Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "Poison",
                url: "jupy",
                img: "Jupy.webp"
            },
            {
                role: "Freeze Immunity",
                url: "lania",
                img: "Lania.webp"
            },
        ]
    },
    {
        id: "Earth",
        name: "Earth Particle Dungeon",
        boss: "Rock Eater",
        bossImg: "Rock_Eater.webp",
        effects: ["Deals PDMG", "Grants [DEF Bosst]", "DMG multipliers scale partially off DEF as well"],
        comps: [
            {
                name: "STAGE-15 BURN COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Stun Immunity",
                    url: "sieg",
                    img: "Sieg.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero2: {
                    role: "Burn",
                    url: "rachel",
                    img: "Rachel.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "Burn",
                    url: "fai",
                    img: "Fai.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Stun Immunity",
                    url: "evan",
                    img: "Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero2: {
                    role: "Burn",
                    url: "yuri",
                    img: "Yuri.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "Burn",
                    url: "rachel",
                    img: "Rachel.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Stun Immunity",
                    url: "evan",
                    img: "Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero2: {
                    role: "+Weakness DMG",
                    url: "miho",
                    img: "Miho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "ST DPS",
                    url: "pascal",
                    img: "Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "Burn",
                url: "jave",
                img: "Jave.webp"
            },
            {
                role: "Burn",
                url: "radgrid",
                img: "Radgrid.webp"
            },
            {
                role: "Burn",
                url: "velika",
                img: "Velika.webp"
            },
            {
                role: "Burn",
                url: "snipper",
                img: "Snipper.webp"
            },
        ]
    },
    {
        id: "Light",
        name: "Light Particle Dungeon",
        boss: "Star-Touched",
        bossImg: "Star-Touched.webp",
        effects: ["Deals MDMG", "Grants [DMG Nullification]", "Grants self [MATK Boost] on skill"],
        comps: [
            {
                name: "STAGE-15 MULTI COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Shock Immunity / Buff Remove",
                    url: "chloe",
                    img: "Chloe.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Multi-Hit",
                    url: "kyle",
                    img: "Kyle.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Multi-Hit",
                    url: "ling-ling",
                    img: "Ling_Ling.webp",
                    icnSet: "Icn_Vanguard.webp"
                },
                hero4: {
                    role: "Multi-Hit",
                    url: "sun-wukong",
                    img: "Sun_Wukong.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "DoT",
                    url: "bai-jiao",
                    img: "Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Shock Immunity / Buff Remove",
                    url: "chloe",
                    img: "Chloe.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Heal",
                    url: "lucy",
                    img: "Lucy.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero3: {
                    role: "DoT",
                    url: "rachel",
                    img: "Rachel.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero4: {
                    role: "DoT",
                    url: "bai-jiao",
                    img: "Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Multi-Hit",
                    url: "ling-ling",
                    img: "Ling_Ling.webp",
                    icnSet: "Icn_Vanguard.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Shock Immunity / Buff Remove",
                    url: "chloe",
                    img: "Chloe.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Heal",
                    url: "lucy",
                    img: "Lucy.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero3: {
                    role: "Barrier",
                    url: "evan",
                    img: "Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero4: {
                    role: "Multi-Hit - Buff Remove",
                    url: "joker",
                    img: "Joker.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "Multi-Hit",
                    url: "ling-ling",
                    img: "Ling_Ling.webp",
                    icnSet: "Icn_Vanguard.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "DoT",
                url: "fai",
                img: "Fai.webp"
            },
            {
                role: "DoT",
                url: "cleo",
                img: "Cleo.webp"
            },
            {
                role: "DoT",
                url: "may",
                img: "May.webp"
            },
        ]
    },
    {
        id: "Darkness",
        name: "Darkness Particle Dungeon",
        boss: "Dark Delinquent",
        bossImg: "Dark_Delinquent.webp",
        effects: ["Deals PDMG", "Grants [PATK boost]", "Inflicts [DEF Reduction] so Debuff Removal is highly important"],
        comps: [
            {
                name: "STAGE-15 BLEED COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Death Immunity / Bleed",
                    url: "xiao",
                    img: "Xiao.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero2: {
                    role: "Bleed",
                    url: "freyja",
                    img: "Freyja.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Bleed",
                    url: "bid-am",
                    img: "Bi_Dam.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Bleed",
                    url: "bai-jiao",
                    img: "Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Death Immunity / Bleed",
                    url: "xiao",
                    img: "Xiao.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero2: {
                    role: "Bleed",
                    url: "soi",
                    img: "Soi.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Cleanse",
                    url: "lucy",
                    img: "Lucy.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero5: {
                    role: "Bleed",
                    url: "zhao-yun",
                    img: "Zhao_Yun.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "DMG Buffer",
                    url: "kyrielle",
                    img: "Kyrielle.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero2: {
                    role: "+Weakness DMG",
                    url: "miho",
                    img: "Miho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "ST DPS",
                    url: "pascal",
                    img: "Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "Bleed",
                url: "branze-bransel",
                img: "Branze_Bransel.webp"
            },
            {
                role: "Bleed",
                url: "rei",
                img: "Rei.webp"
            },
        ]
    },
    {
        id: "Gold",
        name: "Gold Dungeon",
        boss: "Rich King Slime",
        bossImg: "Rich_King_Slime.webp",
        effects: ["After 5 basic attacks, it deals 99,999 Fixed, Percing DMG to your team 3 time(s) and reduces Buff Duration by 3 Turn(s)"],
        comps: [
            {
                name: "STAGE-15 MAX DMG COMP (MAGIC)",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Magic Vul",
                    url: "melia",
                    img: "Melia.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero2: {
                    role: "+Weakness DMG",
                    url: "miho",
                    img: "Miho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Buffer",
                    url: "xiao-qiao",
                    img: "Xiao_Qiao.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "ST DPS",
                    url: "pascal",
                    img: "Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 MAX DMG COMP (ATTACK",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "+Weakness DMG",
                    url: "miho",
                    img: "Miho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero2: {
                    role: "Debuffer",
                    url: "rachel",
                    img: "Rachel.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Support",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "ST DPS",
                    url: "bai-long",
                    img: "Bai_Long.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "DMG Buffer",
                    url: "ariel",
                    img: "Ariel.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "MATK Buffer",
                    url: "noho",
                    img: "Noho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Support",
                    url: "lina",
                    img: "Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "ST DPS",
                    url: "xiao-qiao",
                    img: "Xiao_Qiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "DMG Buffer",
                url: "orly",
                img: "Orly.webp"
            },
            {
                role: "DMG Buffer",
                url: "kyrielle",
                img: "Kyrielle.webp"
            },
            {
                role: "DMG Buffer",
                url: "espada",
                img: "Espada.webp"
            },
            {
                role: "DMG Buffer",
                url: "vanessa",
                img: "Vanessa.webp"
            },
        ]
    }
]