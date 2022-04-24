import { Divider, Flex, Heading, VStack } from '@chakra-ui/react'
import { ROUTES } from '@constants'
import { PageLink } from '@interfaces'
import { useRouter } from 'next/router'
import React from 'react'

import { NavLinksColumn } from './NavLinksColumn'

type Props = {
    links: PageLink[]
}

export const SidePanel = ({ links }: Props) => {
    const router = useRouter()
    const book = links[0].book

    return (
        <VStack width="full" bg="gray.800" h="100vh">
            <Flex align="center" direction="column">
                <Heading
                    size="4xl"
                    pt="8"
                    pb="0"
                    fontFamily="Lobster"
                    cursor="pointer"
                    onClick={() => router.push(ROUTES.HOME)}
                >
                    Omen
                </Heading>
                <Heading size="lg" pt="0" fontFamily="Lobster">
                    The Story Driven RPG
                </Heading>
                {book && (
                    <Heading
                        size="md"
                        pt="0"
                        pb="0"
                        color="teal.300"
                        cursor="pointer"
                        onClick={() => router.push(`/${book.toLowerCase()}`)}
                    >
                        {book}
                    </Heading>
                )}
            </Flex>
            <Divider />
            <NavLinksColumn links={links} />
        </VStack>
    )
}
