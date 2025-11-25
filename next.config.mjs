import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

const nextConfig = {
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  reactStrictMode: true
}

export default withNextra(nextConfig)
