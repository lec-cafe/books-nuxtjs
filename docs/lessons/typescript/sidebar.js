module.exports = {
    "/lessons/typescript/": [
        {
            title: 'TypeScript を用いた Nuxt.js の開発',
            collapsable: false,
            path: "/lessons/typescript/",
            children: [
                '1-1.setup',
                '1-2.sample',
                '1-3.typescript',
                '1-4.compositionapi',
            ]
        },
        {
            title: 'Extra',
            collapsable: false,
            children: [
                '2-1.jest',
                '2-2.plugin',
            ]
        },
        "/lessons/",
        "/tips/nuxtjs/",
        "/tips/typescript/"

    ],
}
