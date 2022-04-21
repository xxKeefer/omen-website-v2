import { PageLink } from '@interfaces'

export const byOrderThenRank = (a: PageLink, b: PageLink) => {
    if (a.order === b.order) {
        return a.rank - b.rank
    }
    return a.order - b.order
}
