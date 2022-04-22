import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

import { Bubble } from './Bubble'

type Props = { children?: React.ReactNode }

const SpeechDialogue = ({ children }: Props) => {
    return (
        <VStack
            bgColor="whiteAlpha.300"
            w="full"
            padding="8"
            borderRadius="16px"
        >
            {children}
        </VStack>
    )
}

SpeechDialogue.Bubble = Bubble

export default SpeechDialogue
