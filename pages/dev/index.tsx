import { Box } from '@chakra-ui/react'
import { SpeechDialogue } from '@components'
import { MainPageProps } from '@interfaces'
import type { NextPage } from 'next'
import Head from 'next/head'

const { Bubble } = SpeechDialogue

const DevPage: NextPage<MainPageProps> = () => {
    return (
        <>
            <Head>
                <title>Omen / Test Page</title>
                <meta name="description" content="This is a test page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box h="full" w="full" p="16">
                <SpeechDialogue>
                    <Bubble emoji="👑" talker="DM">
                        something coool and really long something coool and
                        really long something coool and really long something
                        coool and really long something coool and really long{' '}
                        something coool and really long something coool and
                        really long something coool and really long something
                        coool and really long something coool and really long{' '}
                        something coool and really long something coool and
                        really long something coool and really long something
                        coool and really long something coool and really long{' '}
                    </Bubble>
                    <Bubble right emoji="🕺" talker="Player" color="teal.500">
                        something coool
                    </Bubble>
                </SpeechDialogue>
            </Box>
        </>
    )
}

export default DevPage
