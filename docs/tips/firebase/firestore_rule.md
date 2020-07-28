# Firestore のルール

Firestore では、Firebase 認証情報を利用する全てのクライアントに対し、
全て共通のデータアクセス権限を提供します。

より強固なセキュリティのアプリケーションを構築したい場合、
「データベース」→「ルール」のタブでルールの設定を行い、
データアクセス権限に関する設定を施すことができます。

## ルールを設定する

「データベース」→「ルール」のタブでルールの設定を行うことで、
Firestore の各コレクションに対する書き込み、読み込み動作を制御できます。

はじめに、テストモードで作成された データベースでは以下のようなルールが設定されており、
この設定では、全てのコレクションに対して、2020/08/05 までの全ての読み込みと、書き込みを許可します。

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2020, 8, 5);
    }
  }
}
```

rules_version と service の宣言はルールを記載する上での基本的な書式となります。

全てのFirestore ルールは、`service` の中で記述されます。

```
rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {
      ...
    }
}
```

データベースのルールは `match /databases/{database}/documents` の内部で `match` を利用して、
コレクションとドキュメントを絞り込んでから記載されます。

ex. 全てのドキュメントに対する読み込み、書き込みを許可

```
match /databases/{database}/documents {
    match /{document=**} {
        allow read, write: if true;
    }
}
```

ex. messages コレクションに対する書き込みを許可し、読み込みを禁止

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{messageId} {
      allow read: if false;
      allow write: if true;
    }
  }
}
```

`{ ... }` は任意のセグメントにマッチし、
ドキュメントの指定で利用される `{document=**}` はサブコレクション内を含む、
全てのドキュメントにマッチします。 

::: tip
全てのルール設定は、ドキュメントに対して行われます。
:::

## 公式ガイド

データの取り出し、制限に関する公式のドキュメントは以下からも確認可能です。

https://firebase.google.com/docs/firestore/security/get-started?hl=ja

https://firebase.google.com/docs/firestore/query-data/order-limit-data?hl=ja

