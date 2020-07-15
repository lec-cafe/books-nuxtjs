# Composition API + TypeScript 

Vue 3.0 から正式に導入される Composition API と
TypeScript を利用した Vue Component の記述方法を紹介します。

## Usage

プラグインを利用して簡単に

```bash
@vue/composition-api
```

```js
// plugins/composition-api.js
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

## Component の記述

Component の記述は以下のような形になります。

```ts
import { defineComponent, computed, reactive } from '@vue/composition-api'

interface User {
  firstName: string
  lastName: number
}

export default defineComponent({
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  },

  setup ({ user }) {
    const fullName = computed(() => `${user.firstName} ${user.lastName}`)
    const state = reactive({
        message: "hello world"
    })

    return {
      fullName,
      state
    }
  }
})
```

`@vue/composition-api` からは `defineComponent`, `computed`, `reactive`
の３つがインポートできます。

`defineComponent` は コンポーネントを作成するのに必要な関数で、
引数に渡すオブジェクトの `setup` 関数内で、コンポーネントの動作を定義します。
 
data や method などの Vue 内で利用したい値や関数はすべて setup 関数内の return の中で定義します。

Vue のバインディング機能を利用する場合には「リアクティブ」なデータを渡す必要があり、
オブジェクトをリアクティブにする場合には `reactive` 関数が利用できます。

## 値の受け渡し

Props は上記のようにして setup の引数から値を受け取ることができます。

emit は以下のような形で、第２引数の SetupContext からemitを取得して利用します。

```ts
import { defineComponent, SetupContext } from "@vue/composition-api";

type Props = {
  message: string;
};

export default defineComponent({
  props: {
    message: {
      type: String,
      default: "default Value"
    }
  },
  setup(props: Props, context: SetupContext) {
    const upperCaseMessage = () => {
      context.emit("change-message", props.message.toUpperCase());
    };

    return {
      upperCaseMessage
    };
  }
});
```

## フック

フックは以下のように vue から取得した関数で定義します。


```ts
import { onMounted, onUpdated, onUnmounted } from 'vue'

const MyComponent = {
  setup() {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
```


 
 
 ```computed`, `ref`

## ref / reactive の違い

reative はオブジェクトを リアクティブにする一方で、
プリミティブな値をリアクティブにする場合は ref が利用されるようです。

https://qiita.com/mgr/items/a5e35636d371969e0a4d

reactive で作成したオブジェクトは、オブジェクト全体でリアクティブになるため、
個別のプロパティを渡してもそれはリアクティブではありません。

代わりに toRefs を利用して state.message.toRefs のようにすれば、
個別のプロパティをリアクティブな状態で利用可能になります。

