import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { globby } from 'globby'

type TocEntry = {
  title: string
  description?: string
  path: string
}

type TocGroup = {
  section: string
  pages: TocEntry[]
}

const PAGES_DIR = path.join(process.cwd(), 'pages')
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'toc.json')

async function readFrontMatter(filePath: string) {
  const content = await fs.readFile(filePath, 'utf8')
  const parsed = matter(content)
  const relative = path.relative(PAGES_DIR, filePath).replace(/\\/g, '/')
  const normalized = relative.replace(/(^|\/)index\.mdx$/, '')
  const route = `/${normalized}`.replace(/\.mdx$/, '').replace(/\/$/, '') || '/'
  const category = path.dirname(relative).split('/')[0] || 'Home'

  return {
    title: parsed.data.title as string,
    description: (parsed.data.description as string) || '',
    route: route || '/',
    category
  }
}

async function generate() {
  const files = await globby(['**/*.mdx', '!**/_meta.json'], { cwd: PAGES_DIR })
  const entries = await Promise.all(
    files.map(async (file) => {
      const absolute = path.join(PAGES_DIR, file)
      const { title, description, route, category } = await readFrontMatter(absolute)
      return { title, description, route, category }
    })
  )

  const groups: Record<string, TocEntry[]> = {}

  entries.forEach(({ title, description, route, category }) => {
    if (!groups[category]) groups[category] = []
    groups[category].push({ title, description, path: route || '/' })
  })

  const toc: TocGroup[] = Object.entries(groups).map(([section, pages]) => ({
    section: section === '.' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1),
    pages: pages.sort((a, b) => a.title.localeCompare(b.title))
  }))

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true })
  await fs.writeFile(OUTPUT_PATH, JSON.stringify(toc, null, 2))
  // eslint-disable-next-line no-console
  console.log(`Generated TOC with ${entries.length} entries -> ${OUTPUT_PATH}`)
}

generate()
