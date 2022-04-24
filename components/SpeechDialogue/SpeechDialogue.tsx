import { Box, Heading, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'

import { Bubble } from './Bubble'

type Props = { children?: React.ReactNode; title?: string }

const SpeechDialogue = ({ children, title }: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 1024px)')

    return (
        <Box>
            {title && (
                <Heading as="h6" size="lg" textAlign="center">
                    {title}
                </Heading>
            )}
            <VStack
                bgColor="whiteAlpha.300"
                w="full"
                padding={isMobile ? '2' : '8'}
                borderRadius="16px"
            >
                {children}
            </VStack>
        </Box>
    )
}

SpeechDialogue.Bubble = Bubble

export default SpeechDialogue
