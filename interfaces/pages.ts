import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { PageLink, PageMeta } from './meta'

export type MainPageProps = {
    pages: PageLink[]
}

export type SlugPageProps = {
    page: {
        content: MDXRemoteSerializeResult<Record<string, unknown>>
        data: PageMeta
    }
    links: PageLink[]
}
