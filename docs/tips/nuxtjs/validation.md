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
フォームにバリデーションを実装
```vue
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label>名前</label>
            <input type="text" class="form-control" v-model.trim="$v.name.$model" />
            <div class="invalid-feedback d-block" v-if="!$v.name.required">名前を入力してください。</div>
            <div
              class="invalid-feedback d-block"
              v-if="!$v.name.minLength"
            >名前は {{$v.name.$params.minLength.min}} 文字以上で入力してください。</div>
          </div>
          <div class="form-group">
            <label>年齢</label>
            <input type="number" class="form-control" v-model.trim="$v.age.$model" />
            <div
              class="invalid-feedback d-block"
              v-if="!$v.age.between"
            >年齢は {{$v.age.$params.between.min}} から {{$v.age.$params.between.max}} で入力してください。</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: "",
      age: 0
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  }
};
</script>
```
このように validations オプションに各keyのバリデーションを設定することで、簡単にバリデーションを実装できます。  

![validation_result](./validation_result.png)

[公式](https://vuelidate.js.org/#sub-installation)


## カスタムルールの実装
カスタムルールとは独自でバリデーションルールを追加できるものです。
以下の使用例が簡単なものです。
```vue
<script>
const isPostal = value => {
  return /^[0-9]{3}-?[0-9]{4}/.test(value)
}
</script>
```
上記のように関数名を「isPostal」としてアロー構文(function構文でも可)で自分が作成したい独自のバリデーションを作成することが出来ます。  
今回だと郵便番号のバリデーションです  

## バリデーションルールの分離
また、バリデーションをファイルで作成してimportで必要なページに読み込んで使用することも可能です。
service/validations.js を作成して必要なバリデーションファイルを作成していきます。
  
例えばログインページにバリデーションをかけたいとします。以下の様に別ファイルで使用したいバリデーションを記述します
`service/validations.js/password.js`
```vue
<script>
import { required, minLength, maxLength} from 'vuelidate/lib/validators' 

export const onlyAlphanumeric = (value) => {
    return /^[0-9a-zA-Z]*$/.test(value)
}

export const withNumeric = (value) => {
    return /[a-z]+/.test(value)
}
export const withAlpha = (value) => {
    return /[0-9]+/.test(value)
}

export default {
    password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(30),
        onlyAlphanumeric,
        withNumeric,
        withAlpha,
    }
}
</script>
``` 
このファイルを呼び出したファイルは定義されている「required」「minLength」...etcが使用できる様になります。
`pages/login.vue`
```vue
<template>
  <form>
    <div>
      <input id="changePassword" v-model="$v.password.$model" type="text">
    </div>
    <div>
      <p v-if="!$v.password.required && $v.password.$dirty">
        入力してください。
      </p>
      <p v-if="!$v.password.minLength && $v.password.$dirty">
        8文字以上で入力してください。
      </p>
      <p v-if="!$v.password.maxLength && $v.password.$dirty">
        30文字以内で入力してください
      </p>
      <p v-if="$v.password.onlyAlphanumeric && $v.password.$dirty">
        半角英数字のみで入力してください。
      </p>
    </div>
  </form>
</template>
<script>
  import validations from '@/service/validation/password'

  export default {
    data() {
      return {
        password: ''
      }
    },
    validations
  }
</script>
```
importでバリデーション設定を読み込んで`required`や`minLength`を呼び出し元で定義しているから使用できています。
$dirtyは`入力がされていない時`にエラーメッセージを表示させない為に書いてあります。
$model: 検証するもとのモデルへの参照。Vueモデルを直に参照したときと同じ値が得られます。  
つまり、this.$v.value.$modelとthis.valueは同じ値になるということです。

一つのファイルにバリデーションを含めて書くとコード量が増えますが、このように別のファイルで定義していると可読性が向上します。
