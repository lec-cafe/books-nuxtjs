# functions の活用

firebaseで提供されているサービスの一つにCloud Function for Firebaseがありあmす。
こちらはFirebaseのイベントを受け取ってサーバー側で処理を実行できるサービスとなっています。

クライアント側にロジックを持たせてしまうと問題になるような処理をcloud functionで実行することで、
安全にデータの処理などを実行する事が出来ます。

::: tip
firebase functionsでnode v10以上を使用する場合は、料金プランをSparkからBlazeプランに変更する必要があります。
:::


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
$ mkdir functions_test
$ cd functions_test
$ firebase init functions

## 以下を選択
> create a new project

## project idの入力を求められるので好きに入力
test-functions2323

## project名の入力を求められるので入力
test-function2323

## 使用言語を聞かれるので好きな方を選択
> JavaScript 

## ESLintを使用したいかどうか選択
N

## 今すぐnpmのモジュールをインストールするか選択
Y
```

するとfunctionsというフォルダーが作成されたのが確認できると思います。  
functions内のindex.jsに実行したい処理を書いていきます。


## 関数を作成する

今回は例として呼び出されたらHello Worldを返す関数を作成してみましょう。


```js
const functions = require('firebase-functions);

exports.helloWorld = function.https.onRequest((req,res)=> {
  res.send("Hello World");
});
```

関数が作成出来た所で、デプロイして動作を確認してみましょう。

```bash
$ firebase deploy --only functions
```

デプロイが完了するとFunction URLが発行されます。

```bash
=== Deploying to 'functiontest-23232'...
i  deploying functions
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged functions (27.41 KB) for uploading
✔  functions: functions folder uploaded successfully
i  functions: creating Node.js 10 function helloWorld(us-central1)...


✔  functions[helloWorld(us-central1)]: Successful create operation. 
Function URL (helloWorld): https://us-central1-functiontest-23232.cloudfunctions.net/helloWorld
```

URLにアクセスするとHello Worldが表示されているのが確認できると思います。


## 公式ガイド

より詳しいFunctionsの使い方についてはこちらの公式ガイドを参考にしてください。
https://firebase.google.com/docs/functions

