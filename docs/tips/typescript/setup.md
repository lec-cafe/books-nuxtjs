# TypeScript 環境のセットアップ

https://typescript.nuxtjs.org/ja/guide/setup.html

```bash
$ npm install --save-dev @nuxt/typescript-build @nuxt/types
```

```js
// nuxt.config.js
export default {
  buildModules: [
    '@nuxt/typescript-build'
  ]
}
```

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

`@types/vue-shim.d.ts`

```ts
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```
