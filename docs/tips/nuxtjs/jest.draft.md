# jestの設定

## jestの導入

jestとはjavascriptのユニットテストのためのツールです。
Babel,TypeScript,Node,Vueなど、様々なフレームワークを利用したプロジェクトで動作させる事が出来ます。

以下のモジュールインストールを行うとjestの環境構築が出来上がります。

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



