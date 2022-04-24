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
        <Box>
            {isMobile && <NavBar links={links} />}
            <HStack h="full" align="stretch" spacing={0} overflowY="hidden">
                {!isMobile && (
                    <Box w="20%" minW="300px">
                        <SidePanel links={links} />
                    </Box>
                )}
                <VStack
                    w={isMobile ? 'full' : '80%'}
                    maxH="100vh"
                    overflowY="scroll"
                >
                    {children}
                    <Footer />
                </VStack>
            </HStack>
        </Box>
    )
}
