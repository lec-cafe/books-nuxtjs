## Hosting の設定

`firebase.json` の `hosting` を以下のように設定

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

## multisite の場合

Hosting のページから「別のサイトを追加」を選択して、複数のサイトを運用できます。

```bash
$ firebase target:apply hosting {targetName} {ResourceName} 
```

targetNameは、任意に設定可能なサイト名、ResourceName は設定時に入力したサイトのドメイン名です。

コマンドを実行すると、以下のような形で `.firebaserc` に `targets` の設定が追加されます。

```json
{
  "targets": {
    "{project_id}": {
      "hosting": {
        "{targetName}": [
          "{resourceName}"
        ]
      }
    }
  }
}
```

ここで指定した targetName を利用して hosting の設定を記述する場合には、
以下のように `target` を指定します。

```json
{
  "hosting": {
    "target": "{targetName}",
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

```bash
$ firebase deploy --only hosting 
```

https://firebase.google.com/docs/hosting/multisites?hl=ja
