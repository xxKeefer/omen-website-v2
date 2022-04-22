import { Box, Divider, Flex, Heading, Link, VStack } from '@chakra-ui/react'
import { ROUTES } from '@constants'
import { PageLink } from '@interfaces'
import { useRouter } from 'next/router'
import React from 'react'
import { byOrderThenRank } from 'utils'

type Props = {
    links: PageLink[]
}

export const SidePanel = ({ links }: Props) => {
    const router = useRouter()
    const book = links[0].book
    const chapters = [
        ...Array.from(
            new Set(links.sort(byOrderThenRank).map((link) => link.chapter)),
        ),
    ]
    return (
        <VStack width="20%" bg="gray.800">
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
                        textTransform="capitalize"
                        cursor="pointer"
                        onClick={() => router.push(`/${book.toLowerCase()}`)}
                    >
                        {book}
                    </Heading>
                )}
            </Flex>
            <Divider />
            <VStack overflowY="scroll" w="full" h="full">
                {chapters.map((chapter) => (
                    <Box key={chapter} textAlign="left" w="full" pl="4">
                        <Heading size="md" pt="4">
                            {chapter}
                        </Heading>
                        <VStack align="flex-start" pl="4">
                            {links
                                .filter((link) => link.chapter === chapter)
                                .map(({ title, path }) => (
                                    <Link
                                        key={path}
                                        onClick={() => router.push(path)}
                                    >
                                        {title}
                                    </Link>
                                ))}
                        </VStack>
                    </Box>
                ))}
            </VStack>
        </VStack>
    )
}
