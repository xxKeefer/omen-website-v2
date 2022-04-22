import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { MainLayout } from '@components'
import { PageLink, PageMeta } from '@interfaces'
import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import path from 'path'
import { byOrderThenRank } from 'utils'

type Props = {
    pages: PageLink[]
}

const ChroniclesMain: NextPage<Props> = ({ pages }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Omen / Chronicles</title>
                <meta
                    name="description"
                    content="The tales and stories told in Omen"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainLayout>
                <Box as="main">
                    <Heading size="4xl">Chronicles</Heading>
                    <Heading size="xl">
                        The tales and stories told in Omen
                    </Heading>
                    <VStack>
                        {pages.sort(byOrderThenRank).map(({ title, path }) => (
                            <Link key={path} onClick={() => router.push(path)}>
                                {title}
                            </Link>
                        ))}
                    </VStack>
                </Box>

                <Box h="full" />
                <Box as="footer">
                    <Text size="xs">
                        Ben Gorman, &copy; Copyright {new Date().getFullYear()}
                    </Text>
                </Box>
            </MainLayout>
        </>
    )
}

export default ChroniclesMain

export const getStaticProps: GetStaticProps = async () => {
    const chroniclesDirectory = path.join(
        process.cwd(),
        'markdown',
        'chronicles',
    )
    const filenames = await fs.readdir(chroniclesDirectory)
    const files = await Promise.all(
        filenames.map(async (filename) => {
            const filepath = path.join(chroniclesDirectory, filename)
            const fileContents = await fs.readFile(filepath, 'utf8')
            const { content, data } = grayMatter(fileContents)
            return {
                filename,
                content,
                data,
            }
        }),
    )

    const pages = files.map((file) => {
        const { filename, data } = file
        const book = data.book.toLowerCase()
        const section = filename.replace('.mdx', '')

        return {
            path: `/${book}/${section}`,
            title: data.title,
            order: data.order,
            rank: data.rank,
        }
    })

    return {
        props: { pages },
    }
}
