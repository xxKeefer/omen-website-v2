import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import { ROUTES } from '@constants'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
    book?: string
}

export const SidePanel = ({ book }: Props) => {
    const router = useRouter()
    return (
        <VStack width="20%" bg="gray.800">
            <Flex align="center" direction="column">
                <Heading
                    size="4xl"
                    pb="0"
                    fontFamily="Lobster"
                    cursor="pointer"
                    onClick={() => router.push(ROUTES.HOME)}
                >
                    Omen
                </Heading>
                <Heading size="lg" pt="0" fontFamily="Lobster">
                    {book ?? 'The Story Driven RPG'}
                </Heading>
            </Flex>
        </VStack>
    )
}
