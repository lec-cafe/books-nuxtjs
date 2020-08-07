# firebase hosting の活用

firebaseで提供されているサービスの一つにfirebase hostingがあります。
こちらは静的動的問わずウェブサイトをホスティングする事のできるサービスとなっています。

今回はNuxt.jsの静的デプロイを例として紹介させていただきます。

## firebase-toolsのインストール

firebase functionsの環境を整える為に、まずはfirebaseコマンドをインストールします。

```bash
$ npm install -g firebase-tools
```

インストールが完了したら、Firebaseにログインしましょう。

```bash
$ firebase login
```

## プロジェクトの作成

firebase-toolsのインストールが完了したら、以下の手順にしたがってプロジェクトファイルを作成します。

```bash
$ npx create-nuxt-app firebase_hosting
$ cd firebase_hosting
$ firebase init hosting

## 以下を選択
> create a new project

## project idの入力を求められるので好きに入力
test-hosting23232

## project名の入力を求められるので入力
test-hosting23232

## パブリックディレクトリを聞かれるのでdistと入力
dist

## spa用にリライト設定を追加するか聞かれるのでnと入力
n
```

するとプロジェクト内にfirebase関連のファイルが追加されたのが確認できると思います。

## デプロイを行う

プロジェクトが作成出来たところでさっそくデプロイを行ってみましょう。
まずは以下のコードを実行して、distファイルを作成します。

```bash
$ npm run build
$ npm run generate
```

distが作成されたのが確認できたらdeployコマンドを実行します。

```bash
$ firebase deploy --only hosting
```

デプロイが完了するとwebサイトのURLが発行されます。

```
=== Deploying to 'test-hosting2323'...

i  deploying hosting
i  hosting[test-hosting2323]: beginning deploy...
i  hosting[test-hosting2323]: found 9 files in dist
✔  hosting[test-hosting2323]: file upload complete
i  hosting[test-hosting2323]: finalizing version...
✔  hosting[test-hosting2323]: version finalized
i  hosting[test-hosting2323]: releasing new version...
✔  hosting[test-hosting2323]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/test-hosting2323/overview
Hosting URL: https://test-hosting2323.web.app
```

URLにアクセスするとNuxt.jsの初期画面が確認できると思います。

## 公式ガイド

より詳しいfirebase hostingの使い方や設定についてはこちらの公式ガイドを参考にしてください。

https://firebase.google.com/docs/hosting



