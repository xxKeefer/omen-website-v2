import { BillBoard, MainLayout } from '@components'
import { SlugPageProps } from '@interfaces'
import { MDXWrapper, OmenMDXStyle } from '@styles'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'
import { slugPagePaths, slugPageProps } from 'utils/serverFunctions'

const CompendiumPage: NextPage<SlugPageProps> = ({ page, links }) => {
    const { content, data } = page
    return (
        <>
            <Head>
                <title>{`Omen / ${data.title}`}</title>
                <meta name="description" content={data.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout links={links}>
                <MDXWrapper>
                    <MDXRemote
                        {...content}
                        components={{ BillBoard, ...OmenMDXStyle }}
                    />
                </MDXWrapper>
            </MainLayout>
        </>
    )
}

export default CompendiumPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const page = await slugPageProps('compendium', params)
    return {
        props: page,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await slugPagePaths('compendium')
    return {
        paths,
        fallback: false,
    }
}
