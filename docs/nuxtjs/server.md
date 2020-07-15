# ローカルサーバの内容を他のデバイスから確認する
**参考文献**: https://ja.nuxtjs.org/faq/host-port/
優先度の高い順に並べている
- 方法1: 以下のコードをnuxt.config.jsに追加する
```
server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  }
 ```
- 方法2: 環境変数HOSTとPORTを他の用途に使用していた場合に、以下のコードをpackage.jsonに追加する
```
"scripts": {
  "dev": "NUXT_HOST=0.0.0.0 NUXT_PORT=3333 nuxt"
}
```
- 方法3: 方法3をクロスプラットフォームに対応させるために、以下の手順を行う
  - 手順1: cross-envをインストールする: `npm install --save-dev cross-env`
  - 手順2: 以下のコードをpackage.jsonに追加する
    ```
    "scripts": {
      "dev": "cross-env NUXT_HOST=0.0.0.0 NUXT_PORT=3333 nuxt"
    }
    ```
- 方法4: 以下のコードをpackage.jsonに追加する
```
"scripts": {
  "dev": "HOST=0.0.0.0 PORT=3333 nuxt"
}
```
- 方法5: 以下のコードをpackage.jsonに追加する
```
"config": {
  "nuxt": {
    "host": "0.0.0.0",
    "port": "3333"
  }
},
```
