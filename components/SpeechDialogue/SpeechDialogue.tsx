import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

import { Bubble } from './Bubble'

type Props = { children?: React.ReactNode; title?: string }

const SpeechDialogue = ({ children, title }: Props) => {
    return (
        <Box paddingInline="40">
            {title && (
                <Heading as="h6" size="xl" textAlign="center">
                    {title}
                </Heading>
            )}
            <VStack
                bgColor="whiteAlpha.300"
                w="full"
                padding="8"
                borderRadius="16px"
            >
                {children}
            </VStack>
        </Box>
    )
}

SpeechDialogue.Bubble = Bubble

export default SpeechDialogue
