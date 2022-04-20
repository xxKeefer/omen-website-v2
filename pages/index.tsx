import { Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Omen RPG</title>
                <meta
                    name="description"
                    content="The story driven role playing game"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Heading size="2xl">Omen RPG</Heading>
                <Text>The story driven role playing game</Text>
            </main>

            <footer>
                <Text size="sm">
                    Ben Gorman, &copy; Copyright {new Date().getFullYear()}
                </Text>
            </footer>
        </>
    )
}

export default Home
