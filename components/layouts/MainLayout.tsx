import { Box, HStack, useMediaQuery, VStack } from '@chakra-ui/react'
import { Footer } from '@components/Footer'
import { PageLink } from '@interfaces'
import React from 'react'

import { NavBar, SidePanel } from '../nav'

type Props = {
    children: React.ReactNode
    links: PageLink[]
}

export const MainLayout = ({ children, links }: Props) => {
    const [isMobile] = useMediaQuery('(max-width: 1024px)')

    return (
        <HStack h="100vh" align="stretch" spacing={0} overflowY="hidden">
            {!isMobile && (
                <Box w="20%" minW="300px">
                    <SidePanel links={links} />
                </Box>
            )}
            <VStack w={isMobile ? 'full' : '80%'}>
                {isMobile && <NavBar links={links} />}
                <VStack w="full" h="full" overflowY="scroll">
                    {children}
                    <Footer />
                </VStack>
            </VStack>
        </HStack>
    )
}
