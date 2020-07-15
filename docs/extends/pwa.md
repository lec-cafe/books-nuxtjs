```bash
 npm i @nuxtjs/pwa
```

```bash
modules: [
     '@nuxtjs/pwa'
],
```

`static/icon.png` を置く

以下を nuxt.config.js に書くと manifest.json ができる

```js
manifest: {
    name: "遅れます.me",
    title: "遅れます.me",
    'og:title': '遅れます.me',
    description: 'いつものように起きたら、突然の頭痛、そんなとき、仕事のメールを打ちたいですか？朝、いつもどおりに出発・・・しかし突然の電車遅延。混雑した社内でメール打ちたいですか？そんなあなたのためのサービスです。',
    'og:description': 'いつものように起きたら、突然の頭痛、そんなとき、仕事のメールを打ちたいですか？朝、いつもどおりに出発・・・しかし突然の電車遅延。混雑した社内でメール打ちたいですか？そんなあなたのためのサービスです。',
    lang: 'ja',
    theme_color: "#529b58",
    background_color: "#bde0c0",
    display: "standalone",
    scope: "/",
    start_url: "/category"
  }
```
