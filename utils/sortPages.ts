import { PageLink, PageMeta } from '@interfaces'

export const byOrderThenRank = (a: PageLink, b: PageLink) => {
    if (a.order === b.order) {
        return a.rank - b.rank
    }
    return a.order - b.order
}

export const filterPublished = (pages: (PageLink | PageMeta)[]) =>
    pages.filter((page) => page.published)
