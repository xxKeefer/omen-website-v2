import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
    return (
        <Box as="footer" paddingBlock="8">
            <Text size="xs">
                Ben Gorman, &copy; Copyright {new Date().getFullYear()}
            </Text>
        </Box>
    )
}
