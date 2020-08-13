module.exports = {
    "/lessons/chatapp/": [
        {
            title: 'Nuxt.js/Firebase で作成するチャットアプリ',
            collapsable: false,
            path: "/lessons/chatapp/",
            children: [
                '1-1.setup',
                '1-2.store',
                '1-3.firebase',
                '1-4.auth',
                '1-5.firestore',
            ]
        },
        {
            title: 'Extra',
            collapsable: false,
            children: [
                '2-1.rules',
            ]
        },
        "/lessons/",
        "/tips/nuxtjs/",
        "/tips/firebase/"

    ],
}
