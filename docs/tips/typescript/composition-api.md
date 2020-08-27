# Composition API + TypeScript 

Vue 3.0 から正式に導入される Composition API を利用して
Vue Component を作成する方法を確認していきましょう。

## Setup

Nuxt.js で Composition API を利用する場合、
`@nuxtjs/composition-api` のモジュールを利用するのが便利です。

```bash
$ npm i @nuxtjs/composition-api
```

`nuxt.config.js` にモジュールの読み込みを追記しておきましょう。

```js
export default {
  buildModules: [
    // ...
    '@nuxtjs/composition-api'
  ]
}
```

## Component の記述

Composition APIを利用した Component の記述は以下のような形になります。

data や methods などで定義していた変数や関数は、
setup 関数の内部で返り値として定義することができます。

```vue
<template>
    <div>
        <div>{{ message }} {{ counter }}</div>
        <div>
            <button type="button" @click="countUp">CLICK ME</button>        
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const message = ref("hello world")
    let counter = ref(0)
    const countUp = () => {
        counter++
    }   
    return {
        message,
        counter,
        countUp
    }
  }
})
</script>
```

data にわたすべき値は、`ref` 関数でラップして実装する必要があります。
`ref` でラップせずに渡した値は、リアクティブではない値として扱われ、
アプリケーション内での値の変更がテンプレートに通知されません。

ref には オブジェクトや配列を渡すことができず、文字列や数値のみを引数に渡すことができます。

オブジェクトや配列には以下のように reactive を利用して リアクティブなオブジェクトを生成します。

```vue
<template>
    <div>
        <div>{{ cart.unitPrice }}円 {{ cart.amount }}個</div>
        <div>
            <button type="button" @click="countUp">ADD</button>        
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const cart = reactive({
        unitPrice: 1500,
        amount: 1
    })   
    const countUp = () => {
        cart.amount++
    }   
    return {
        cart,
        countUp
    }
  }
})
</script>
```

### Components

子コンポーネントの定義は、 `components` で行うことができます。

```vue
<template>
    <div>
        ...
        <UserModal/>
        ...
    </div>
</template>

<script>
import { UserModal } from "@/components/UserModal.vue"
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  components: {
    UserModal
  },
  setup () {
    //...
  }
})
</script>
```

### lifecycle

`mounted` や `updated` などのライフサイクルは、
setup の中で該当の関数をコールして定義します。

```vue
<script>
import { defineComponent, ref,onMounted, onUpdated, onUnmounted } from '@vue/composition-api'

export default defineComponent({
  setup () {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    
    // ...
  }
})
</script>

```

### Props

Props は setup の引数から値を受け取ることができます。

emit は以下のような形で、第２引数からemitを取得して利用します。

```vue
<script >
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    message: {
      type: String,
      default: "default Value"
    }
  },
  setup(props, context) {
    const message = props.message
    const upperCaseMessage = () => {
      context.emit("change-message");
    };
    return {
      message, // this is not reactive  
      upperCaseMessage
    };
  }
})
</script>
```


### computed

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

## layout

layout などの Nuxt.js 固有の値は、
通常通りオブジェクトにキーをはやして値を定義できます。

## computed

```ts
import { defineComponent, computed, reactive } from '@vue/composition-api'

export default defineComponent({
  layout: "guest",
  setup () {
    // ...
  }
})
```

## this の利用

`$axios` や `$v` など プラグイン等から this 経由で渡される値を利用したいときには、
第２引数から this 相当の root オブジェクトを取得します。

```ts
import {defineComponent, onMounted, reactive, SetupContext} from '@nuxtjs/composition-api'

export default defineComponent({
setup(props:null,ctx: SetupContext) {
  const $v = ctx.root.$v;
  // ...
},
})
```

## Document

Composition API の記法に関する詳細は、以下のドキュメントが参考になります。

https://composition-api.vuejs.org/

@nuxtjs/composition-api 固有の表現に関しては以下のドキュメントが参考になります。

https://composition-api.nuxtjs.org/

