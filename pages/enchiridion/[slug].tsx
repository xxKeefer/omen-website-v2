import { BillBoard, MainLayout } from '@components'
import { PageMeta } from '@interfaces'
import { MDXWrapper, OmenMDXStyle } from '@styles'
import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

type Props = {
    page: {
        content: MDXRemoteSerializeResult<Record<string, unknown>>
        data: PageMeta
    }
}

const EnchiridionPage: NextPage<Props> = ({ page }) => {
    const { content, data } = page
    return (
        <>
            <Head>
                <title>{`Omen / ${data.title}`}</title>
                <meta name="description" content={data.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
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

export default EnchiridionPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const enchiridionDirectory = path.join(
        process.cwd(),
        'markdown',
        'enchiridion',
    )
    const filenames = await fs.readdir(enchiridionDirectory)
    const file = filenames.find(
        (filename) => filename === `${params?.slug}.mdx`,
    )
    if (!file) return { props: { page: {} } }
    const filepath = path.join(enchiridionDirectory, file)
    const fileContents = await fs.readFile(filepath, 'utf8')
    const { content, data } = grayMatter(fileContents)
    const mdxSource = await serialize(content)

    return {
        props: {
            page: {
                content: mdxSource,
                data,
            },
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const enchiridionDirectory = path.join(
        process.cwd(),
        'markdown',
        'enchiridion',
    )
    const filenames = await fs.readdir(enchiridionDirectory)
    const paths = filenames.map((filename) => {
        const slug = filename.replace('.mdx', '')
        return {
            params: { slug },
        }
    })
    return {
        paths,
        fallback: false,
    }
}
