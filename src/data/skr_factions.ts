import { unknown } from "astro:schema";

export const factionNames = [
    "skr_sevenknights",
    "skr_sevenknightsofold",
    "skr_darkknights",
    "skr_fourlords",
    "skr_fourlordsofold",
    "skr_nightcrows",
    "skr_luminousrevolutionaries",
    "skr_hiddenmasters",
    "skr_celestialguardians",
    "skr_evanexpedition",
    "skr_adventurers",
    "skr_terra",
    "skr_holycrosscrusaders",
    "skr_shadowclan",
    "skr_asgar",
    "skr_aisha"
] as const;

export const factions = [
    {
        tittle: "Seven Knights",
        faction: "skr_sevenknights",
        icon: "Seven_Knights_icon.webp",
        unknown: 0
    },
    {
        tittle: "Seven Knights of Old",
        faction: "skr_sevenknightsofold",
        icon: "Seven_Knights_of_Old_icon.webp",
        unknown: 2
    },
    {
        tittle: "Dark Knights",
        faction: "skr_darkknights",
        icon: "Dark_Knights_icon.webp",
        unknown: 0
    },
    {
        tittle: "Four Lords",
        faction: "skr_fourlords",
        icon: "Four_Lords_icon.webp",
        unknown: 0
    },
    {
        tittle: "Four Lords of Old",
        faction: "skr_fourlordsofold",
        icon: "Four_Lords_of_Old_icon.webp",
        unknown: 0
    },
    {
        tittle: "Night Crows",
        faction: "skr_nightcrows",
        icon: "Night_Crow_icon.webp",
        unknown: 1
    },
    {
        tittle: "Luminous Revolutionaries",
        faction: "skr_luminousrevolutionaries",
        icon: "Revolutionaries_icon.webp",
        unknown: 0
    },
    {
        tittle: "Hidden Masters",
        faction: "skr_hiddenmasters",
        icon: "Hidden_Masters_icon.webp",
        unknown: 8
    },
    {
        tittle: "Celestial Guardians",
        faction: "skr_celestialguardians",
        icon: "Celestial_Guardians_icon.webp",
        unknown: 1
    },
    {
        tittle: "Evan Expedition",
        faction: "skr_evanexpedition",
        icon: "Evan_Crew_icon.webp",
        unknown: 0
    }
    ,
    {
        tittle: "Adventurers",
        faction: "skr_adventurers",
        icon: "Adventurers_icon.webp",
        unknown: 0
    },
    {
        tittle: "Terra",
        faction: "skr_terra",
        icon: "Terra_icon.webp",
        unknown: 0
    },
    {
        tittle: "Holy Cross Crusaders",
        faction: "skr_holycrosscrusaders",
        icon: "Crusaders_icon.webp",
        unknown: 0
    },
    {
        tittle: "Shadow Clan",
        faction: "skr_shadowclan",
        icon: "Shadow_Clan_icon.webp",
        unknown: 0
    },
    {
        tittle: "Asgar",
        faction: "skr_asgar",
        icon: "Asgar_icon.webp",
        unknown: 0
    },
    {
        tittle: "Aisha",
        faction: "skr_aisha",
        icon: "Aisha_icon.webp",
        unknown: 6
    }
];