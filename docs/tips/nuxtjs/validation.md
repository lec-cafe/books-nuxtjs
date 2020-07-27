# バリデーション
バリデーションの実装には、vuelidate を利用します。

## バリデーションの実装
まずはvuelidateをインストールします。
```vue
$ npm i vuelidate
```
つぎに、Vuelidateの基本的な設定を行いましょう。Vuelidateのライブラリは、つぎのようにふたつCDNから<script>要素に読み込みます。
```vue
<script src="https://cdn.jsdelivr.net/npm/vuelidate@0.7.4/dist/vuelidate.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuelidate@0.7.4/dist/validators.min.js"></script>
```
Vuelidateにより使えるようになるのは、つぎのふたつの機能です。
  
- validationsコンポーネントオプション
Vueコンポーネントに検証の中身を定めます。
- `$v`モデルオブジェクト
Vueのモデルと検証の状態をプロパティとしてもつモデルのオブジェクトです。
validationsオプションプロパティはVueインスタンスのオプションオブジェクトに加えて、検証するデータに対して何を確かめるのかオブジェクトで定めます。プロパティが検証するデータ、値はバリデータ(検証の設定)を納めたオブジェクトです。Vue.use()メソッドでVuelidateを使い、用いるバリデータはvalidatorsから変数に取り出しておいてください。requiredは入力が必須ということです。

### 使用例
  

## カスタムルールの実装
TODO date にカスタムルールを入れる

## バリデーションルールの分離
TODO service/validations.js を作成してルールを分離する。
