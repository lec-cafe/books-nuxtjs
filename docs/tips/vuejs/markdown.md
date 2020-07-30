# vue.js でmarkdown を利用する方法

## markedをインストール
下記のコマンドでインストールします
```vue
npm install marked
```
[公式ドキュメント](https://www.npmjs.com/package/marked)

## yamlファイルを使ってmarkdown

まず`documents/data/test.yaml`を作成します。
```vue
test:
  title: ## これがタイトル
  text: ### これが文章
```
そして次に`npm run doc`で static/api/test.json を作成します。  
作成したjsonファイルを読み込む記述を.vueファイルに記述します。  
pages/index.vue
```vue
<template>
  <div v-if="test" :test="test">
    <div>
      {{ test.title }}
    </div>
    <p>
      {{ test.text }}
    </p>
  </div>
</template>

<script>
import { test,} from '@/static/api/test.json'
export default {
  data() {
    return {
      test: null,
    }
  },
  async mounted() {
    this.test = test
  },
}
</script>
```
こうするとjson化されている`title`と`text`がmarkdownの形式で表示されます。  
まず、.vueファイルではjsonファイルをimportして、その値をmountedでvueのdataと結び付けてい  
v-ifをdivにつけているのはjsonのデータが読み込まれる前に`title`や`text`を読み込まない為です。
