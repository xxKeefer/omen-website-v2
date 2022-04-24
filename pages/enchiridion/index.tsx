import { Box, Container, Heading } from '@chakra-ui/react'
import { MainLayout, SearchTags } from '@components'
import { MainPageProps } from '@interfaces'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { mainPageProps } from 'utils/serverFunctions'

const EnchiridionMain: NextPage<MainPageProps> = ({ pages }) => {
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
                <Container as="main" h="full">
                    <Heading size="4xl">Enchiridion</Heading>
                    <Heading size="xl">
                        The guide for players to get started with Omen
                    </Heading>
                    <SearchTags links={pages} />
                </Container>
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
