
## 準備


https://github.com/marketplace/actions/github-action-for-firebase

firebase cli を構成済みのこと

firebase login:ci

## 環境変数

FIREBASE_TOKEN 必須 `firebase login:ci` で取得する

PROJECT_ID 通常は、`.firebaserc` の中のものが利用されるが、必要に応じて環境変数で上書きできる。

PROJECT_PATH - `firebase.json`のパスを指定する。省略した場合プロジェクトルートが利用される。
