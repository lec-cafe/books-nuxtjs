# 環境の構成

Firebase FUnctions における環境変数として、
config の機能が提供されています。

config 変数は以下のようにして `functions:config:set` コマンドで設定可能です。

```bash 
firebase functions:config:set slack.url=https://hooks.slack.com/services/XXX
```

::: tip
新しくセットされた config 変数は、
セットされたあとのデプロイ後に初めて有効になります。
:::

プロジェクトにおける現在の構成情報は、
`functions:config:get` で確認可能です。

```bash 
firebase functions:config:get
```

## 環境変数を利用する

functions のコード内では、`functions.config()`を利用して、config 変数にアクセスすることができます。

```js
const functions = require('firebase-functions');

exports.userCreated = functions.database.ref('/users/{id}').onWrite(event => {
  const slackUrl = functions.config().slack.url
  // ...
});
```


https://firebase.google.com/docs/functions/config-env?hl=ja
