import { Box, Heading, Link, VStack } from '@chakra-ui/react'
import { PageLink } from '@interfaces'
import { useRouter } from 'next/router'
import React from 'react'
import { byOrderThenRank } from 'utils'

type Props = {
    links: PageLink[]
}

export const NavLinksColumn = ({ links }: Props) => {
    const router = useRouter()

    const chapters = [
        ...Array.from(
            new Set(links.sort(byOrderThenRank).map((link) => link.chapter)),
        ),
    ]

    return (
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
    )
}
