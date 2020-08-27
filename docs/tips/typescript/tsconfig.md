## tsconfig.json の設定

TypeScript のセットアップ時に作成した `tsconfig.json`
は TypeScript のビルドに関する設定ファイルです。

tsconfig の全容に関する記載は以下の公式ガイドを確認ください。

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## 重要な設定

`paths` はファイル参照のエイリアスを定義するセクションです。
webpack 側で alias の機能を利用する際には、 tsconfig 側でも合わせて同様の設定を入れる必要があります。

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    }
  }  
}
```

`types` は追加で読み込む型定義ファイルです。
node_modules 内の型定義ファイルを自動的に認識させる必要がある際などに
ここにモジュール名を追加します。

```json
{
  "compilerOptions": {
    "types": [
      "@types/node",
      "@nuxt/types"
    ]
  },
}

```

