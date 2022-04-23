import { MainLayout } from '@components'
import { SlugPageProps } from '@interfaces'
import { run } from '@mdx-js/mdx'
import { MDXProvider } from '@mdx-js/react'
import { MDXWrapper, OmenMDXStyle } from '@styles'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import * as runtime from 'react/jsx-runtime.js'
import { slugPagePaths, slugPageProps } from 'utils/serverFunctions'

const ChroniclesPage: NextPage<SlugPageProps> = ({ page, links }) => {
    const { content, data } = page
    const [mdxModule, setMdxModule] = useState<any>()
    const Content = mdxModule ? mdxModule.default : Fragment

    useEffect(() => {
        ;(async () => {
            setMdxModule(await run(content, runtime))
        })()
    }, [content])
    return (
        <>
            <Head>
                <title>{`Omen / ${data.title}`}</title>
                <meta name="description" content={data.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout links={links}>
                <MDXProvider components={OmenMDXStyle}>
                    <MDXWrapper>
                        <Content />
                    </MDXWrapper>
                </MDXProvider>
            </MainLayout>
        </>
    )
}

export default ChroniclesPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const page = await slugPageProps('chronicles', params)

    return {
        props: page,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await slugPagePaths('chronicles')
    return {
        paths,
        fallback: false,
    }
}
