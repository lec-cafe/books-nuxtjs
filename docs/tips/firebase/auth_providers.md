# プロバイダを利用した認証 

Firebase Authentication では様々な認証プロバイダを利用して認証処理を実装することができます。

## Google を利用したログイン

Google 経由でのログインを実施する場合には、`GoogleAuthProvider` を利用します。

```js
async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    console.log(result)
}
```

signInWithPopup から受け取る事ができる `result` には、
ユーザ情報の他に、アクセストークンが含まれており、これはログインしたタイミングでのみ取得可能となっています。

アプリケーションの構造上 アクセストークンが必要な場合には、
必ず result を受け取って、適切な保存処理を行うようにしましょう。

ログインに際し、追加のスコープが必要になる場合には、`addScope` をコールします。

```js
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
```

Google ログインに関する詳細は、以下の公式資料も確認ください。

https://firebase.google.com/docs/auth/web/google-signin?hl=ja

## GitHub を利用したログイン

Google 経由でのログインを実施する場合には、`GithubAuthProvider` を利用します。

```js
async () => {
    const provider = new firebase.auth.GithubAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    console.log(result)
}
```

signInWithPopup から受け取る事ができる `result` には、
ユーザ情報の他に、アクセストークンが含まれており、これはログインしたタイミングでのみ取得可能となっています。

アプリケーションの構造上 アクセストークンが必要な場合には、
必ず result を受け取って、適切な保存処理を行うようにしましょう。

ログインに際し、追加のスコープが必要になる場合には、`addScope` をコールします。

```js
provider.addScope('repo');
```

GitHub Scope に関する詳細は、以下の資料をご確認ください。

https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/

Google ログインに関する詳細は、以下の公式資料も確認ください。

https://firebase.google.com/docs/auth/web/github-auth?hl=ja
