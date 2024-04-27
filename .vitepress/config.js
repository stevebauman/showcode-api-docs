export default {
    title: 'Showcode API (Beta)',
    description: 'Generate beautiful code screenshots using an HTTP request.',
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['meta', { name: 'description', content: 'Create beautiful images of code.' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:description', content: 'Generate beautiful code screenshots using an HTTP request.' }],
        ['meta', { name: 'twitter:title', content: 'Documentation' }],
        ['meta', { name: 'twitter:image', content: 'https://api.showcode.app/docs/twitter_summary_card.png' }],
        ['meta', { name: 'twitter:site', content: 'https://api.showcode.app/docs' }],
        ['meta', { name: 'twitter:creator', content: '@ste_bau' }],
        ['meta', { name: 'format-detection', content: 'telephone=no' }],
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['link', {
            rel: 'apple-touch-icon',
            type: 'image/png',
            sizes: '180x180',
            href: '/docs/apple-touch-icon.png',
        }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/docs/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/docs/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/docs/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/docs/safari-pinned-tab.svg', color: '#5bbad5' }],
    ],
    base: '/docs/',
    outDir: '../public/docs',
    themeConfig: {
        logo: '/logo.svg',
        outline: [3,4],
    }
}
