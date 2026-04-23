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
                    img: "ryan/Ryan.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Freeze",
                    url: "heavenia",
                    img: "heavenia/Heavenia.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Freeze",
                    url: "spike",
                    img: "spike/Spike.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero4: {
                    role: "Freeze",
                    url: "lania",
                    img: "lania/Lania.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Freeze",
                    url: "gelidus",
                    img: "gelidus/Gelidus.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Burn Immunity",
                    url: "yui",
                    img: "yui/Yui.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero2: {
                    role: "Barrier",
                    url: "evan",
                    img: "evan/Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "lina/Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Freeze",
                    url: "lania",
                    img: "lania/Lania.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Freeze",
                    url: "heavenia",
                    img: "heavenia/Heavenia.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Burn Immunity",
                    url: "ariel",
                    img: "ariel/Ariel.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Buffer",
                    url: "victoria",
                    img: "victoria/Victoria.webp",
                    icnSet: "Icn_Gatekeeper.webp"
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
                    role: "ST DPS",
                    url: "pascal",
                    img: "pascal/Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            }
        ],
        otherHeroes: [
            {
                role: "Support",
                url: "rosie",
                img: "rosie/Rosie.webp"
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
                    img: "feng-yan/Feng_Yan.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Poison",
                    url: "jane",
                    img: "jane/Jane.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "lina/Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Poison",
                    url: "cleo",
                    img: "cleo/Cleo.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Poison",
                    url: "bai-jiao",
                    img: "bai-jiao/Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Freeze Immunity",
                    url: "feng-yan",
                    img: "feng-yan/Feng_Yan.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Barrier",
                    url: "evan",
                    img: "evan/Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "lina/Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Poison",
                    url: "jane",
                    img: "jane/Jane.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Poison",
                    url: "bai-jiao",
                    img: "bai-jiao/Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Freeze Immunity",
                    url: "feng-yan",
                    img: "feng-yan/Feng_Yan.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Unable to Recover",
                    url: "chloe",
                    img: "chloe/Chloe.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero3: {
                    role: "Healer",
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
                    role: "ST DPS",
                    url: "pascal",
                    img: "pascal/Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "Poison",
                url: "jupy",
                img: "jupy/Jupy.webp"
            },
            {
                role: "Freeze Immunity",
                url: "lania",
                img: "lania/Lania.webp"
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
                    img: "sieg/Sieg.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero2: {
                    role: "Burn",
                    url: "rachel",
                    img: "rachel/Rachel.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
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
                    role: "Burn",
                    url: "fai",
                    img: "fai/Fai.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Stun Immunity",
                    url: "evan",
                    img: "evan/Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero2: {
                    role: "Burn",
                    url: "yuri",
                    img: "yuri/Yuri.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
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
                    role: "Burn",
                    url: "rachel",
                    img: "rachel/Rachel.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Stun Immunity",
                    url: "evan",
                    img: "evan/Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero2: {
                    role: "+Weakness DMG",
                    url: "miho",
                    img: "miho/Miho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
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
                    role: "ST DPS",
                    url: "pascal",
                    img: "pascal/Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "Burn",
                url: "jave",
                img: "jave/Jave.webp"
            },
            {
                role: "Burn",
                url: "radgrid",
                img: "radgrid/Radgrid.webp"
            },
            {
                role: "Burn",
                url: "velika",
                img: "velika/Velika.webp"
            },
            {
                role: "Burn",
                url: "snipper",
                img: "snipper/Snipper.webp"
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
                    img: "chloe/Chloe.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Multi-Hit",
                    url: "kyle",
                    img: "kyle/Kyle.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Multi-Hit",
                    url: "ling-ling",
                    img: "ling-ling/Ling_Ling.webp",
                    icnSet: "Icn_Vanguard.webp"
                },
                hero4: {
                    role: "Multi-Hit",
                    url: "sun-wukong",
                    img: "sun-wukong/Sun_Wukong.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "DoT",
                    url: "bai-jiao",
                    img: "bai-jiao/Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Shock Immunity / Buff Remove",
                    url: "chloe",
                    img: "chloe/Chloe.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Heal",
                    url: "lucy",
                    img: "lucy/Lucy.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero3: {
                    role: "DoT",
                    url: "rachel",
                    img: "rachel/Rachel.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero4: {
                    role: "DoT",
                    url: "bai-jiao",
                    img: "bai-jiao/Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Multi-Hit",
                    url: "ling-ling",
                    img: "ling-ling/Ling_Ling.webp",
                    icnSet: "Icn_Vanguard.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Shock Immunity / Buff Remove",
                    url: "chloe",
                    img: "chloe/Chloe.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "Heal",
                    url: "lucy",
                    img: "lucy/Lucy.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero3: {
                    role: "Barrier",
                    url: "evan",
                    img: "evan/Evan.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero4: {
                    role: "Multi-Hit - Buff Remove",
                    url: "joker",
                    img: "joker/Joker.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "Multi-Hit",
                    url: "ling-ling",
                    img: "ling-ling/Ling_Ling.webp",
                    icnSet: "Icn_Vanguard.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "DoT",
                url: "fai",
                img: "fai/Fai.webp"
            },
            {
                role: "DoT",
                url: "cleo",
                img: "cleo/Cleo.webp"
            },
            {
                role: "DoT",
                url: "may",
                img: "may/May.webp"
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
                    img: "xiao/Xiao.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero2: {
                    role: "Bleed",
                    url: "freyja",
                    img: "freyja/Freyja.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "lina/Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Bleed",
                    url: "bi-dam",
                    img: "bi-dam/Bi_Dam.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero5: {
                    role: "Bleed",
                    url: "bai-jiao",
                    img: "bai-jiao/Bai_Jiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "Death Immunity / Bleed",
                    url: "xiao",
                    img: "xiao/Xiao.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero2: {
                    role: "Bleed",
                    url: "soi",
                    img: "soi/Soi.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero3: {
                    role: "Healer",
                    url: "lina",
                    img: "lina/Lina.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Cleanse",
                    url: "lucy",
                    img: "lucy/Lucy.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero5: {
                    role: "Bleed",
                    url: "zhao-yun",
                    img: "zhao-yun/Zhao_Yun.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-10 NUKE COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "DMG Buffer",
                    url: "kyrielle",
                    img: "kyrielle/Kyrielle.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero2: {
                    role: "+Weakness DMG",
                    url: "miho",
                    img: "miho/Miho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Healer",
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
                    role: "ST DPS",
                    url: "pascal",
                    img: "pascal/Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "Bleed",
                url: "branze-bransel",
                img: "branze-bransel/Branze_Bransel.webp"
            },
            {
                role: "Bleed",
                url: "rei",
                img: "rei/Rei.webp"
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
                    img: "melia/Melia.webp",
                    icnSet: "Icn_Guardian.webp"
                },
                hero2: {
                    role: "+Weakness DMG",
                    url: "miho",
                    img: "miho/Miho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero3: {
                    role: "Buffer",
                    url: "xiao-qiao",
                    img: "xiao-qiao/Xiao_Qiao.webp",
                    icnSet: "Icn_Paladin.webp"
                },
                hero4: {
                    role: "Buffer",
                    url: "biscuit",
                    img: "biscuit/Biscuit.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero5: {
                    role: "ST DPS",
                    url: "pascal",
                    img: "pascal/Pascal.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE-15 MAX DMG COMP (ATTACK",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "+Weakness DMG",
                    url: "miho",
                    img: "miho/Miho.webp",
                    icnSet: "Icn_Avenger.webp"
                },
                hero2: {
                    role: "Debuffer",
                    url: "rachel",
                    img: "rachel/Rachel.webp",
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
                    role: "ST DPS",
                    url: "bai-long",
                    img: "bai-long/Bai_Long.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
            {
                name: "STAGE 1-15 BASIC COMP",
                formation: "Protective_Formation.webp",
                hero1: {
                    role: "DMG Buffer",
                    url: "ariel",
                    img: "ariel/Ariel.webp",
                    icnSet: "Icn_Gatekeeper.webp"
                },
                hero2: {
                    role: "MATK Buffer",
                    url: "noho",
                    img: "noho/Noho.webp",
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
                    role: "ST DPS",
                    url: "xiao-qiao",
                    img: "xiao-qiao/Xiao_Qiao.webp",
                    icnSet: "Icn_Avenger.webp"
                }
            },
        ],
        otherHeroes: [
            {
                role: "DMG Buffer",
                url: "orly",
                img: "orly/Orly.webp"
            },
            {
                role: "DMG Buffer",
                url: "kyrielle",
                img: "kyrielle/Kyrielle.webp"
            },
            {
                role: "DMG Buffer",
                url: "espada",
                img: "espada/Espada.webp"
            },
            {
                role: "DMG Buffer",
                url: "vanessa",
                img: "vanessa/Vanessa.webp"
            },
        ]
    }
]