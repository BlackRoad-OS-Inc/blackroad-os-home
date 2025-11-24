import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>BlackRoad OS · Home</span>,
  project: {
    link: 'https://github.com/blackroad-os/home'
  },
  docsRepositoryBase: 'https://github.com/blackroad-os/home/blob/main',
  footer: {
    text: 'BlackRoad OS · Home Handbook'
  },
  editLink: {
    text: 'Contribute on GitHub'
  },
  search: {
    placeholder: 'Search the handbook'
  },
  primaryHue: 220,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BlackRoad OS Home'
    }
  }
}

export default config
