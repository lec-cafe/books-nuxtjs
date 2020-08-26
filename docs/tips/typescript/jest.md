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
    "^~/(.*)$": "<rootDir>/$1"
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "json", "vue", "ts"],
  testMatch: ["<rootDir>/**/*.spec.ts", "<rootDir>/**/*.spec.js"]
}
```

最後にテストを実行するためのコマンドを `package.json`に追加しましょう。

```
{
  "scripts": {
    ...
    "test": "jest
  }
}
```

## テストの実行

まずはテストのセットアップ用のファイル `test/jest.setup.js` を作成します。

```bash
$ touch test/jest.setup.js 
```

`test/jest.setup.js` に書かれた内容は、テスト実行前の初期に呼び出されます。

通常、dotenv の読み込みや、モジュールの初期化などを記述します。
（今は空のままでも問題ありません。）

次にテストのファイルを作成しましょう。
`test/sample.spec.js` を作成して以下のように記述してみましょう。

```js
describe("サンプルテスト",()=>{
  test("1+2 が 3 になるか", ()=>{
    expect(1+2).toBe(3)
  })
})
```

jest では、 `expect` `toBe` のような形で、２つの値が一致するかどうかのテストを記述するのが一般的です。

jest の テスト関数に関する詳細は以下の公式ドキュメントを参照ください。

https://jestjs.io/docs/ja/using-matchers

https://jestjs.io/docs/ja/expect

上記のファイルは以下のコマンドで実行可能です。

```bash
$ npm run test -- test/sample.spec.js
```
