# TypeScript 環境のセットアップ

https://typescript.nuxtjs.org/ja/guide/setup.html

必要なモジュールは以下でインストールします。

```bash
$ npm install --save-dev @nuxt/typescript-build @nuxt/types
```

インストールしたモジュールは以下の形で、 `nuxt.config.js` に登録しましょう。

```js
// nuxt.config.js
export default {
  buildModules: [
    '@nuxt/typescript-build'
  ]
}
```

次に、`tsconfig.json` を作成して、以下の内容を記述します。

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "ESNext",
    "moduleResolution": "Node",
    "lib": [
      "ESNext",
      "ESNext.AsyncIterable",
      "DOM"
    ],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    },
    "types": [
      "@types/node",
      "@nuxt/types"
    ]
  },
  "exclude": [
    "node_modules"
  ]
}
```

最後に、`@types/vue-shim.d.ts` を作成して以下のように定義します。

```ts
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```
