import {
    Box,
    Code,
    Divider,
    Heading,
    Link,
    ListItem,
    OrderedList,
    Table,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    UnorderedList,
} from '@chakra-ui/react'
import {
    BillBoard,
    Bubble,
    Callout,
    InlineDefine,
    SpeechDialogue,
} from '@components'

export const OmenMDXStyle = {
    h1: (props: any) => <Heading as="h1" fontSize="5xl" {...props} />,
    h2: (props: any) => <Heading as="h2" fontSize="4xl" {...props} />,
    h3: (props: any) => <Heading as="h3" fontSize="2xl" {...props} />,
    h4: (props: any) => <Heading as="h4" fontSize="xl" {...props} />,
    h5: (props: any) => <Heading as="h5" fontSize="lg" {...props} />,
    h6: (props: any) => <Heading as="h6" fontSize="md" {...props} />,
    p: (props: any) => (
        <Text as="p" fontSize="lg" paddingBlock="0.5rem" {...props} />
    ),
    a: (props: any) => (
        <Link as="a" fontSize="lg" color="teal.300" {...props} />
    ),
    pre: (props: any) => <Text as="pre" fontSize="lg" {...props} />,
    code: (props: any) => (
        <Code as="code" bg="teal.200" fontSize="lg" {...props} />
    ),
    ul: (props: any) => <UnorderedList as="ul" {...props} />,
    ol: (props: any) => <OrderedList as="ol" {...props} />,
    li: (props: any) => <ListItem as="li" {...props} />,
    hr: (props: any) => <Divider as="hr" {...props} />,
    blockquote: (props: any) => <Text as="blockquote" {...props} />,
    table: (props: any) => (
        <Table as="table" borderColor="teal.300" mt="1rem" mb={1} {...props} />
    ),
    thead: (props: any) => (
        <Thead as="thead" borderColor="teal.300" {...props} />
    ),
    tbody: (props: any) => (
        <Tbody as="tbody" borderColor="teal.300" {...props} />
    ),
    tr: (props: any) => <Tr as="tr" borderColor="teal.300" {...props} />,
    td: (props: any) => <Td as="td" borderColor="teal.300" {...props} />,
    th: (props: any) => (
        <Th as="th" borderColor="teal.300" color="pink.500" {...props} />
    ),
    tfoot: (props: any) => (
        <Tfoot as="tfoot" borderColor="teal.300" {...props} />
    ),
    Callout,
    InlineDefine,
    BillBoard,
    SpeechDialogue,
    Bubble,
}

export const MDXWrapper = (props: any) => (
    <Box pl="2rem" pr="2rem" width="100%" className="themed-mdx" {...props} />
)
