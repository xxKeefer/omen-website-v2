import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const ChroniclesMain: NextPage = () => {
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

            <VStack h="100vh" paddingBlock={8}>
                <Box as="main">
                    <Heading size="4xl">Chronicles</Heading>
                    <Heading size="xl">
                        The tales and stories told in Omen
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

export default ChroniclesMain
