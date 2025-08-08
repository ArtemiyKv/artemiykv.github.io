import {defineContentConfig, defineCollection, z} from "@nuxt/content";

export default defineContentConfig({
    collections: {
        experience: defineCollection({
            type: 'data',
            schema: z.object({
                body: z.array(
                    z.object({
                        name: z.string(),
                        date: z.string(),
                        text: z.string(),
                    })
                )
            }),
            source: 'experience/**.yaml'
        }),
        projects: defineCollection({
            type: 'data',
            schema: z.object({
                body: z.array(
                    z.object({
                        title: z.string(),
                        img: z.string(),
                        link: z.string(),
                        text: z.string(),
                        index: z.string(),
                    })
                )
            }),
            source: 'projects/projects.yml',
        }),
        project: defineCollection({
            type: 'data',
            source: 'projects/**.yml',
            schema: z.object({
                title: z.string(),
                slug: z.string(),
                content: z.array(z.object({
                    text: z.string(),
                    image: z.string(),
                    image_mobile: z.string(),
                    is_video: z.boolean(),
                    video: z.string(),
                    video_mobile: z.string(),
                    is_animation: z.boolean(),
                    animation: z.string(),
                    animation_mobile: z.string()
                }))
            })
        })
    }
})
