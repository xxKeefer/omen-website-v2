import { Box, Container, Heading } from '@chakra-ui/react'
import { MainLayout, SearchTags } from '@components'
import { MainPageProps } from '@interfaces'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { mainPageProps } from 'utils/serverFunctions'

const ChroniclesMain: NextPage<MainPageProps> = ({ pages }) => {
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

            <MainLayout links={pages}>
                <Container as="main">
                    <Heading size="4xl">Chronicles</Heading>
                    <Heading size="xl">
                        The tales and stories told in Omen
                    </Heading>
                    <SearchTags links={pages} />
                </Container>

                <Box h="full" />
            </MainLayout>
        </>
    )
}

export default ChroniclesMain

export const getStaticProps: GetStaticProps = async () => {
    const pages = await mainPageProps('chronicles')

    return {
        props: { pages },
    }
}
