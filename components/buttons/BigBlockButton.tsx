import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

type Props = {
    text: string
    subtext?: string
    onClick: () => void
}

export const BigBlockButton = ({ onClick, text, subtext }: Props) => {
    return (
        <VStack
            as="button"
            w="full"
            align="flex-start"
            onClick={onClick}
            border="2px solid"
            borderColor="pink.500"
            borderRadius="8px"
            padding="1rem"
            cursor="pointer"
            _hover={{
                borderColor: 'pink.900',
                bg: 'pink.700',
            }}
        >
            <Text fontSize="4xl">{text}</Text>
            {subtext && <Text fontSize="sm">{subtext}</Text>}
        </VStack>
    )
}
