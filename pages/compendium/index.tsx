import { Box, Heading } from '@chakra-ui/react'
import { MainLayout, SearchTags } from '@components'
import { MainPageProps } from '@interfaces'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { mainPageProps } from 'utils/serverFunctions'

const CompendiumMain: NextPage<MainPageProps> = ({ pages }) => {
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
            <MainLayout links={pages}>
                <Box as="main">
                    <Heading size="4xl">Compendium</Heading>
                    <Heading size="xl">
                        The guide for game masters to get to know Omen
                    </Heading>
                    <SearchTags links={pages} />
                </Box>

                <Box h="full" />
            </MainLayout>
        </>
    )
}

export default CompendiumMain

export const getStaticProps: GetStaticProps = async () => {
    const pages = await mainPageProps('compendium')

    return {
        props: { pages },
    }
}
