import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import path from 'path'

type Props = {
    pages: {
        title: string
        path: string
    }[]
}

const EnchiridionMain: NextPage<Props> = ({ pages }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Omen / Enchiridion</title>
                <meta
                    name="description"
                    content="The guide for players to get started with Omen"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <VStack h="100vh" paddingBlock={8}>
                <Box as="main">
                    <Heading size="4xl">Enchiridion</Heading>
                    <Heading size="xl">
                        The guide for players to get started with Omen
                    </Heading>
                </Box>
                <VStack>
                    {pages.map(({ title, path }) => (
                        <Link key={path} onClick={() => router.push(path)}>
                            {title}
                        </Link>
                    ))}
                </VStack>

                <Box h="full" />
                <Box as="footer">
                    <Text size="xs">
                        Ben Gorman, &copy; Copyright {new Date().getFullYear()}
                    </Text>
                </Box>
            </VStack>
        </>
    )
}

export default EnchiridionMain

export const getStaticProps: GetStaticProps = async () => {
    const enchiridionDirectory = path.join(
        process.cwd(),
        'markdown',
        'enchiridion',
    )
    const filenames = await fs.readdir(enchiridionDirectory)
    const files = await Promise.all(
        filenames.map(async (filename) => {
            const filepath = path.join(enchiridionDirectory, filename)
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
        }
    })

    return {
        props: { pages },
    }
}
