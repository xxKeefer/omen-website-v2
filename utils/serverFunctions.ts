import { compile } from '@mdx-js/mdx'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'

export const mainPageProps = async (directoryName: string) => {
    const dirPath = path.join(process.cwd(), 'markdown', directoryName)
    const filenames = await fs.readdir(dirPath)
    const files = await Promise.all(
        filenames.map(async (filename) => {
            const filepath = path.join(dirPath, filename)
            const fileContents = await fs.readFile(filepath, 'utf8')
            const { content, data } = matter(fileContents)
            return {
                filename,
                content,
                data,
            }
        }),
    )

    return files.map((file) => {
        const { filename, data } = file
        const book = data.book.toLowerCase()
        const section = filename.replace('.mdx', '')

        return {
            path: `/${book}/${section}`,
            ...data,
        }
    })
}

export const slugPageProps = async (
    directoryName: string,
    params: ParsedUrlQuery | undefined,
) => {
    const dirPath = path.join(process.cwd(), 'markdown', directoryName)
    const filenames = await fs.readdir(dirPath)
    const file = filenames.find(
        (filename) => filename === `${params?.slug}.mdx`,
    )
    if (!file) return { props: { page: {} } }
    const filepath = path.join(dirPath, file)
    const fileContents = await fs.readFile(filepath, 'utf8')
    const { content, data } = matter(fileContents)
    const mdxSource = await compile(content, {
        providerImportSource: '@mdx-js/react',
        outputFormat: 'function-body',
        useDynamicImport: true,
    })

    const links = await mainPageProps(directoryName)

    return {
        page: {
            content: String(mdxSource),
            data,
        },
        links,
    }
}

export const slugPagePaths = async (directoryName: string) => {
    const dirPath = path.join(process.cwd(), 'markdown', directoryName)
    const filenames = await fs.readdir(dirPath)
    return filenames.map((filename) => {
        const slug = filename.replace('.mdx', '')
        return {
            params: { slug },
        }
    })
}
