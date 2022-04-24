import {
    BackgroundProps,
    Box,
    Center,
    HStack,
    Text,
    useMediaQuery,
    VStack,
} from '@chakra-ui/react'
import React from 'react'

type Props = {
    emoji: string
    heading: string
    children: React.ReactNode
    color?: BackgroundProps['bg']
}

export const Callout = ({
    children,
    emoji,
    heading,
    color = 'pink.900',
}: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 1024px)')

    return (
        <Center justifyContent="left">
            <VStack
                bg={color}
                borderRadius="md"
                maxW="100%"
                m={isMobile ? 1 : 10}
            >
                <HStack
                    bg="blackAlpha.300"
                    justify="left"
                    w="full"
                    borderTopRadius="lg"
                    spacing={5}
                >
                    <Box
                        bg="blackAlpha.300"
                        p="0.5rem"
                        as="span"
                        fontSize="xl"
                        fontWeight="bold"
                    >
                        {emoji}
                    </Box>
                    <Text
                        as="span"
                        fontSize={isMobile ? 'md' : 'xl'}
                        fontWeight="bold"
                    >
                        {heading}
                    </Text>
                </HStack>
                <Text
                    maxW="100%"
                    p="1rem"
                    pt="0.5rem"
                    as="span"
                    fontSize={isMobile ? 'md' : 'lg'}
                >
                    {children}
                </Text>
            </VStack>
        </Center>
    )
}
