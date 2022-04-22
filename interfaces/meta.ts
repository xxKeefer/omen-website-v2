export type PageMeta = {
    published: boolean
    title: string
    slug: string
    chapter: string
    book: string
    tags: string[]
    order: number
    rank: number
}

export type PageLink = Pick<
    PageMeta,
    'title' | 'order' | 'rank' | 'published'
> & {
    path: string
}
