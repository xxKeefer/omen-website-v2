import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    HStack,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react'
import { ROUTES } from '@constants'
import { PageLink } from '@interfaces'
import { useRouter } from 'next/router'
import React from 'react'
import { GrMenu } from 'react-icons/gr'

import { NavLinksColumn } from './NavLinksColumn'

type Props = {
    links: PageLink[]
}

export const NavBar = ({ links }: Props) => {
    const router = useRouter()
    const book = links[0].book

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box as="section" bg="pink.500" w="full">
            <Box as="nav" bg="bg-surface">
                <HStack spacing="4" justify="space-between" px="4">
                    <Heading
                        py="2"
                        size="2xl"
                        color="gray.900"
                        fontFamily="Lobster"
                        cursor="pointer"
                        onClick={() => router.push(ROUTES.HOME)}
                    >
                        Omen
                    </Heading>
                    <IconButton
                        variant="ghost"
                        icon={<GrMenu fontSize="32px" />}
                        onClick={onOpen}
                        aria-label="Open Menu"
                    />
                </HStack>
            </Box>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="gray.900">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Heading
                            color="teal.300"
                            cursor="pointer"
                            onClick={() =>
                                router.push(`/${book.toLowerCase()}`)
                            }
                        >
                            {book}
                        </Heading>
                    </DrawerHeader>

                    <DrawerBody>
                        <NavLinksColumn links={links} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
