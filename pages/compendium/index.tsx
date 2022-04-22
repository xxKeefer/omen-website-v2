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

const CompendiumMain: NextPage<Props> = ({ pages }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Omen / Compendium</title>
                <meta
                    name="description"
                    content="The guide for game masters to get to know Omen"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <Box as="main">
                    <Heading size="4xl">Compendium</Heading>
                    <Heading size="xl">
                        The guide for game masters to get to know Omen
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

export default CompendiumMain

export const getStaticProps: GetStaticProps = async () => {
    const compendiumDirectory = path.join(
        process.cwd(),
        'markdown',
        'compendium',
    )
    const filenames = await fs.readdir(compendiumDirectory)
    const files = await Promise.all(
        filenames.map(async (filename) => {
            const filepath = path.join(compendiumDirectory, filename)
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
        console.log({ filename, data })
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
