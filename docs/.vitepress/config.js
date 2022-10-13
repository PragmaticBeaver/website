export default {
    lang: "de-DE",
    title: "Der Beaver",
    description: "Ein Blog vom Beaver, auch bekannt als Dominik Blatzheim.",
    base: "/beaver/",
    markdown: {
        theme: "dark-plus",
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about" },
            { text: "Blog", link: "/blog" }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/pragmaticbeaver" }
        ]
    }
}