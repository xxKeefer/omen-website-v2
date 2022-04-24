import {
    Box,
    Flex,
    Input,
    SimpleGrid,
    useMediaQuery,
    VStack,
} from '@chakra-ui/react'
import { BigBlockButton } from '@components/buttons'
import { PageLink } from '@interfaces'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { debounce } from 'utils'

type Props = {
    links: PageLink[]
}

export const SearchTags = ({ links }: Props) => {
    const router = useRouter()
    const [search, setSearch] = useState<string>()
    const updateSearch = debounce(setSearch, 500)
    const [isMobile] = useMediaQuery('(max-width: 1024px)')

    const results = !search
        ? undefined
        : links.filter((link) =>
              link.tags.some(
                  (tag) =>
                      tag.toLowerCase().indexOf(search.toLowerCase()) !== -1,
              ),
          )

    return (
        <VStack w="full" pt="16" paddingInline="4">
            <Input
                size="lg"
                placeholder="Begin typing to search by topic..."
                onChange={(e) => updateSearch(e.target.value)}
            />
            <SimpleGrid columns={isMobile ? 1 : 2} spacing={2} h="fit-content">
                {results &&
                    results.length > 0 &&
                    results.map((link) => (
                        <BigBlockButton
                            key={link.path}
                            onClick={() => router.push(link.path)}
                            text={link.title}
                            subtext={link.tags.join(', ')}
                        />
                    ))}
            </SimpleGrid>
        </VStack>
    )
}
