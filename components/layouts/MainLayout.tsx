import { Box, HStack, VStack } from '@chakra-ui/react'
import { PageLink } from '@interfaces'
import React from 'react'

import { SidePanel } from '../nav'

type Props = {
    children: React.ReactNode
    links: PageLink[]
}

export const MainLayout = ({ children, links }: Props) => {
    return (
        <Box>
            <HStack h="100vh" align="stretch" spacing={0} overflowY="hidden">
                <SidePanel links={links} />
                <VStack w="80%" maxH="100vh" overflowY="scroll">
                    {children}
                </VStack>
            </HStack>
        </Box>
    )
}
