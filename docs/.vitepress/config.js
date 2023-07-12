export default {
    lang: "de-DE",
    title: "PragmaticBeaver",
    description: "Ein Blog vom Biber, auch bekannt als Dome.",
    base: "/website/",
    markdown: {
        theme: "dark-plus",
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: "About", link: "/" },
            { text: "Stories", link: "/author/" },
            { text: "Tabletop", link: "/ttrpg/" }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/pragmaticbeaver" }
        ]
    }
}