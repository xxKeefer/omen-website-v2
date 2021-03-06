import { Box, Container, Heading } from '@chakra-ui/react'
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
                <Container as="main">
                    <Heading size="4xl" fontSize={['5xl', '6xl']}>
                        Compendium
                    </Heading>
                    <Heading size="xl" fontSize={['xl', '3xl']}>
                        The guide for game masters to get to know Omen
                    </Heading>
                    <SearchTags links={pages} />
                </Container>

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
