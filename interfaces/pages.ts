import { VFile } from '@mdx-js/mdx/lib/compile'

import { PageLink, PageMeta } from './meta'

export type MainPageProps = {
    pages: PageLink[]
}

export type SlugPageProps = {
    page: {
        content: VFile
        data: PageMeta
    }
    links: PageLink[]
}
