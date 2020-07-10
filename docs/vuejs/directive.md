## Vue.js ディレクティブの活用

Vue.jsでは `v-` 専用のif文、for文などが提供されており、それら用いてVue側に命令を与えます。
まずは基本的なディレクティブの使い方をマスターしましょう

## v-for
Vueテンプレート上でデータを繰り返す処理をする場合は `v-for` を使用します。
`v-for` を使用する際には必ず `key`を指定してバインドさせましょう 

```vue
<template>
   <div v-for="item in items" :key="item.index">
        <p>{{ item.label }}</p>
        <p>{{ item.value }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {
                        label: "hello",
                        value: "world"
                    }
                ]
            }
        }
    }
</script>
```  

## v-if
`v-if` では `""`内に条件式を記述し、自身とその配下の要素の表示非表示を切り替えることができます
```vue
<template>
   <div v-if="isStudent">
        <p>学生です</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isStudent: true 
            }
        }
    }
</script>
```  

## v-class
`v-class`はある要素に対して動的にclassを付与することができます。
`{ 'クラス名': 条件式 }` のような形で使用されるのが一般的です

```vue
<template>
   <div :class="{ 'color' : isStudent }">
        <p>学生です</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isStudent: true 
            }
        }
    }
</script>
```  





