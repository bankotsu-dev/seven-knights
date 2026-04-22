export interface Set {
    id:      string;
    effect1: string;
    effect2: string;
    effect3: string;
    icon:    string;
}

export interface Hero {
    id:        string;
    data:      HeroData;
}

export interface HeroData {
    name:      string;
    title:     string;
    faction:   string;
    role:      string;
    grade:     string;
    portrait:  string;
    transcend: string;
    skins:     Skin[];
    builds:    Build[];
}

export interface Skin {
    name:   string;
    image:  string;
}

export interface Build {
    name:     string;
    note:     string;
    substats: string[];
    weapon1:  Equipment;
    weapon2:  Equipment;
    armor1:   Equipment;
    armor2:   Equipment;
    rings:    Rings;
}

export interface Equipment {
    type:     string;
    image:    string;
    substat1: string;
    substat2: string;
}

export interface Ring {
    id:     string;
    name:   string;
    effect: string;
    image:  string;
}

export interface Rings {
    ringID1: string;
    ringID2: string;
    ringID3: string;
    ringID4: string;
}

export interface Dungeon {
    id: string;
    name: string;
    boss: string;
    bossImg: string;
    effects: string[];
    comps: Comp[];
    otherHeroes: OtherHero[] | null;
}

export interface Comp {
    name: string;
    formation: string;
    hero1: HeroComp | null;
    hero2: HeroComp | null;
    hero3: HeroComp | null;
    hero4: HeroComp | null;
    hero5: HeroComp | null;
}

export interface HeroComp {
    role: string;
    url: string;
    img: string;
    icnSet: string;
}

export interface OtherHero {
    role: string;
    url: string;
    img: string;
}