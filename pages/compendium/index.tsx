import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const CompendiumMain: NextPage = () => {
    return (
        <>
            <Head>
                <title>Omen / Compendium</title>
                <meta
                    name="description"
                    content="The guide for game masters to learn all about how to play Omen"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <VStack h="100vh" paddingBlock={8}>
                <Box as="main">
                    <Heading size="4xl">Compendium</Heading>
                    <Heading size="xl">
                        The guide for game masters to learn all about how to
                        play Omen
                    </Heading>
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

export default CompendiumMain
