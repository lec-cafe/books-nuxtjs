# Jest のセットアップ

## jestの導入

jestとはjavascriptのユニットテストのためのツールです。
Babel,TypeScript,Node,Vueなど、様々なフレームワークを利用したプロジェクトで動作させる事が出来ます。

まずは以下のモジュールをインストールしてjestのテスト環境を構築しましょう。

```bash
$ npm i jest @types/jest ts-jest vue-jest -D
```

jestの設定は```jest.config.js```に記述します。

```bash
module.exports = {
  setupFiles: ["<rootDir>/test/jest.setup.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"/tes
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "json", "vue", "ts", "graphql"],
  testMatch: ["<rootDir>/**/*.spec.ts", "<rootDir>/**/*.spec.js"]
}
```

最新のJavaScriptを使うために、以下のモジュールをインストールしましょう。

```bash
npm i @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-runtime babel-preset-env -D
```

babelの設定は```.babelrc```に記述します。
```
{
  "comments": false,
  "presets": [
    [ "@babel/preset-env", {
      "targets": {
        "node" : "12"
      }
    }]
  ]
}
```

次にテストを実行するためのコマンドを```package.json```に追加しましょう。

```
{
  "scripts": {
    ...
    "test": "jest
  }
}
```

## コンポーネントのテスト

例としてpropsにtitleを渡して、そのまま表示するシンプルなコンポーネントがあるとします。

```vue
<!-->#Title.vue<-->
<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
```

このコンポーネントのテストコードを書いていきましょう。
propsとして渡した値が実際に表示されているかをテストしています。

```js
import { mount } from '@vue/test-utils'
import Heading from "~/components/Title"

describe("タイトルコンポーネントのテスト",()=>{
  test("タイトルがが表示されているか", ()=>{
    const props = {
      title: "タイトルです"
    }
    const wrapper = mount(Title, {
      propsData: props
    })
    //propsに指定したタイトルが表示されているか確認。
    expect(wrapper.props('title')).toBe(props.text)
  })
})
```

テストが上手くいったか確認するために以下のコマンドを実行しましょう。

```bash
$ npm run test
```

テストの結果が表示され無事にタイトルが表示されている事が確認できると思います。

