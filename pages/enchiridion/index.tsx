import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { MainLayout } from '@components'
import { MainPageProps } from '@interfaces'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { byOrderThenRank } from 'utils'
import { mainPageProps } from 'utils/serverFunctions'

const EnchiridionMain: NextPage<MainPageProps> = ({ pages }) => {
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
            <MainLayout links={pages}>
                <Box as="main" h="full">
                    <Heading size="4xl">Enchiridion</Heading>
                    <Heading size="xl">
                        The guide for players to get started with Omen
                    </Heading>
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

export default EnchiridionMain

export const getStaticProps: GetStaticProps = async () => {
    const pages = await mainPageProps('enchiridion')

    return {
        props: { pages },
    }
}
