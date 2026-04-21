import { defineCollection, z } from "astro:content";
import { file } from 'astro/loaders';

const skr_rings = defineCollection({
    loader: file("src/data/skr_rings.json"),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        effect: z.string(),
        image: z.string(),
    })
})

const skr_sets = defineCollection({
    loader: file("src/data/skr_sets.json"),
    schema: z.object({
        id: z.string(),
        effect1: z.string(),
        effect2: z.string(),
        effect3: z.string(),
        icon: z.string(),
    })
})

const skr_sevenknights = defineCollection({
    loader: file("src/data/skr_sevenknights.json"),
})

const skr_sevenknightsofold = defineCollection({
    loader: file("src/data/skr_sevenknightsofold.json"),
})

const skr_darkknights = defineCollection({
    loader: file("src/data/skr_darkknights.json"),
})

const skr_fourlords = defineCollection({
    loader: file("src/data/skr_fourlords.json"),
})

const skr_fourlordsofold = defineCollection({
    loader: file("src/data/skr_fourlordsofold.json"),
})

const skr_nightcrows = defineCollection({
    loader: file("src/data/skr_nightcrows.json"),
})

const skr_luminousrevolutionaries = defineCollection({
    loader: file("src/data/skr_luminousrevolutionaries.json"),
})

const skr_hiddenmasters = defineCollection({
    loader: file("src/data/skr_hiddenmasters.json"),
})

const skr_celestialguardians = defineCollection({
    loader: file("src/data/skr_celestialguardians.json"),
})

const skr_evanexpedition = defineCollection({
    loader: file("src/data/skr_evanexpedition.json"),
})

const skr_adventurers = defineCollection({
    loader: file("src/data/skr_adventurers.json"),
})

const skr_terra = defineCollection({
    loader: file("src/data/skr_terra.json"),
})

const skr_holycrosscrusaders = defineCollection({
    loader: file("src/data/skr_holycrosscrusaders.json"),
})

const skr_shadowclan = defineCollection({
    loader: file("src/data/skr_shadowclan.json"),
})

const skr_asgar = defineCollection({
    loader: file("src/data/skr_asgar.json"),
})

const skr_aisha = defineCollection({
    loader: file("src/data/skr_aisha.json"),
})



export const collections = { 
    skr_sevenknights, skr_sevenknightsofold, skr_sets, skr_rings, 
    skr_darkknights, skr_fourlords, skr_fourlordsofold, skr_nightcrows, 
    skr_luminousrevolutionaries, skr_hiddenmasters, skr_celestialguardians,
    skr_evanexpedition, skr_adventurers, skr_terra, skr_holycrosscrusaders, 
    skr_shadowclan, skr_asgar, skr_aisha
}