## Firebase CLI

https://firebase.google.com/docs/cli?hl=ja#mac-linux-npm

npm install -g firebase-tools

firebase login 

## 一覧

firebase projects:list

## セットアップ

firebase init 

すると対話型で色々なファイルが生成される。

構成管理は firebase.json ファイルで行う

プロジェクト管理は .firebaserc ファイルが行う

firebase use --add 

でプロジェクトを追加できる。 `--project`　オプションで各プロジェクトを指定できる。

## エミュレーション

```
firebase serve --only functions
```

ポートは firebase.json で管理する。

## deploy

```bash
firebase deploy -m "Deploying the best new feature ever."
```

コメントは必須ではない。 firebase.json は必須

