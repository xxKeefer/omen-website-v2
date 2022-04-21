import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

import { SidePanel } from '../nav'

type Props = {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <Box>
            <HStack align="stretch" w="100vw" minH="100vh" spacing={0}>
                <SidePanel />
                <VStack w="80%" maxH="100vh" overflowY="scroll">
                    {children}
                </VStack>
            </HStack>
        </Box>
    )
}
