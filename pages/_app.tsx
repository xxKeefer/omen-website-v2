import '@fontsource/lobster'
import '@fontsource/poppins'
import '@fontsource/share-tech-mono'

import { ChakraProvider } from '@chakra-ui/react'
import { OmenChakraTheme } from '@styles'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={OmenChakraTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
export default MyApp
