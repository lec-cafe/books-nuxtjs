# vue.js でmarkdown を利用する方法

## markedをインストール
下記のコマンドでインストールします
```vue
npm install marked
```
[公式ドキュメント](https://www.npmjs.com/package/marked)

## vue.jsでmdファイルを読み込めるようにする
npmで markdown-to-vue-loader、vue-loader をインストール
```vue
$ npm install markdown-to-vue-loader vue-loader webpack --save-dev
```
次にwebpackの設定を変更します
webpack.conf.js
```vue
module: {
  rules: [
    {
      test: /\.md$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        'vue-loader',
        {
          loader: 'markdown-to-vue-loader',
          options: {
              exportSource: true    // この設定でMarkdownのRawデータを読み込めるようにする
          },
        },
      ],
    },
  ],
}
```
そしてassetsフォルダにmarkdown.mdファイルを作成します。中身はなんでも良いのでmarkdownの記法で書いておいてください
src/assets/markdown.md
```vue
## test
- test
[test]("#")
```
次に.vueファイルを作成します(今回はmarkdown.vueというファイルで作成します)  
markdown.vue
```vue
<template>
  <div class="markdown">
    <div v-html="compiledMarkdownText" />
  </div>
</template>

<script>
import marked from 'marked'
import md from '../assets/markdown.md'

export default {
  name: 'Markdown',
  data () {
    return {
      markdownText: md.source    // sourceで Rawデータが取得できます 
    }
  },
  computed: {
    compiledMarkdownText: function () {
      return marked(this.markdownText) 
    }
  }
}
</script>

<style scoped>
</style>
```
この状態で確認したら、問題なくmarkdownでの表示がされているはずです。


## yamlでの利用方法

yamlでの利用はマークダウンで表示したい.vueファイルに
```vue
<template>
    <div>
      <div>
        {{ test.title }}
      </div>
      <p>
        {{ test.text }}
      </p>
    </div>
</template>

<script>
import{ test } from '@/static/api/top.json'

export default {
  components: {
    test,
  },
  data() {
    return {
      test: null,
    }
  },
  async mounted() {
    this.test = test
  }
}
</script>

```

test.yaml
```yaml
test:
  title: test(タイトルになる)
  text: ここに文章を書いていく
```
