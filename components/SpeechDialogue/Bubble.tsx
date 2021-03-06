import {
    BackgroundProps,
    Flex,
    Text,
    useMediaQuery,
    VStack,
} from '@chakra-ui/react'
import React from 'react'

type Props = {
    children?: React.ReactNode
    right?: boolean
    talker?: string
    emoji?: string
    color?: BackgroundProps['bg']
}

export const Bubble = ({
    children,
    right,
    talker,
    emoji,
    color = 'pink.700',
}: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 1024px)')

    const circle = isMobile ? '32px' : '50px'

    return (
        <Flex
            w="fit-content"
            maxW="85%"
            borderRadius="8px"
            alignSelf={right ? 'flex-end' : 'flex-start'}
            direction={right ? 'row-reverse' : 'row'}
            align="center"
        >
            {emoji && (
                <Flex
                    bg={color}
                    alignSelf="flex-start"
                    align="center"
                    justify="center"
                    p="4"
                    borderRadius="50%"
                    h={circle}
                    w={circle}
                >
                    <Text fontSize={isMobile ? 'xl' : '3xl'}>{emoji}</Text>
                </Flex>
            )}
            <VStack>
                <Text
                    p="4"
                    marginInline="8px"
                    bg={color}
                    borderRadius="8px"
                    minH={circle}
                    fontSize={isMobile ? 'sm' : 'md'}
                >
                    {children}
                </Text>
                {talker && (
                    <Text
                        fontSize="xs"
                        m="2px !important"
                        paddingInline="16px"
                        alignSelf={right ? 'flex-end' : 'flex-start'}
                    >
                        Sent by {talker}
                    </Text>
                )}
            </VStack>
        </Flex>
    )
}
