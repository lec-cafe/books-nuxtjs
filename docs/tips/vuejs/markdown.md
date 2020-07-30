# vue.js でmarkdown を利用する方法

## markedをインストール
下記のコマンドでインストールします
```vue
npm install marked
```
[公式ドキュメント](https://www.npmjs.com/package/marked)

## yamlでの利用方法

yamlでの利用はマークダウンで表示したい.vueファイルに
```vue
<template>
    <div>
      <div>
        {{ cotact.title }}
      </div>
      <p>
        {{ contact.text }}
      </p>
    </div>
</template>

<script>
import{ test } from '@/static/api/top.json'

export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>

```

test.yaml
```yaml
test:
  title: test(タイトルになる)
  text: ここに文章を書いていく
```
