import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { BigBlockButton } from '@components'
import { ROUTES } from '@constants'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    const router = useRouter()
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

            <VStack h="100vh" padding={8}>
                <Box as="main">
                    <Heading size="4xl">Omen RPG</Heading>
                    <Heading size="xl" fontSize={['xl', '3xl']}>
                        The story driven role playing game
                    </Heading>
                    <VStack mt="8">
                        <BigBlockButton
                            text="Enchiridion"
                            subtext="For Players: a book containing essential information on a subject"
                            onClick={() => router.push(ROUTES.ENCHIRIDION)}
                        />
                        <BigBlockButton
                            text="Compendium"
                            subtext="For Story Tellers: a collection of concise but detailed information about a particular subject"
                            onClick={() => router.push(ROUTES.COMPENDIUM)}
                        />
                        <BigBlockButton
                            text="Chronicles"
                            subtext="For Lore Junkies: a written account of important or historical events in the order of their occurrence."
                            onClick={() => router.push(ROUTES.CHRONICLES)}
                        />
                    </VStack>
                </Box>
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

export default Home
