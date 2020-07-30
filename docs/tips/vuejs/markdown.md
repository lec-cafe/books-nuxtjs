# vue.js でmarkdown を利用する方法

## marked、json-refsをインストール
下記のコマンドでインストールします
```vue
npm install marked
```
```vue
npm install json-refsx
```
インストールが終わったら、プロジェクト内にdocumentフォルダーを作成して、さらにその中にdataフォルダーを作成します。
[公式ドキュメント](https://www.npmjs.com/package/marked)

## yamlファイルを使ってmarkdown

まず`documents/data/sample.yaml`を以下のように作成します。
```vue
test:
  title: ## これがタイトル
  text: ### これが文章
```
次にコマンドを使って変換の作業を行いましょう。
プロジェクト内のpackage.jsonを開いて、以下のコマンドを追加しましょう。  
```vue
//package.json
{
  "name": "sample",
  "version": "1.0.0",
  "description": "My polished Nuxt.js project",
  "author": "penguin",
  "private": true,
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate",
		//以下二つのコマンドを追加
    "doc": "run-p doc:*",     
    "doc:sample": "json-refs resolve -w documents/data/sample.yml > static/api/sample.json" 
  },
```
この2つのコマンドが何をしているのかというと
```vue
"doc" : "run-p doc:*"
```
まず最初のこの行は、npm run docが実行された時に、doc:で始まる全てのコマンドを実行してください。ということを表しています。　
なのでnpm run doc を実行すると、下の行の doc:sampleが実行されます。
```vue
									  //変換したいyml　　　　　　　　　//変換後のjsonの保存先と名前
 "doc:sample": "json-refs resolve -w documents/data/sample.yml > static/api/sample.json" 
```
そしてこの行は、変換したいymlと変換後のjsonの保存場所と名前を渡して、変換を行っています。  
doc:の後はymlファイルに合わせて入力しましょう。  
例えばuser.ymlというユーザーのデータを持ったymlをjsonに変換したいときはこのように。
```vue
//ファイルに合わせる					 //変換したいyml　　　　　　//変換後のjsonの保存先と名前
"doc:user": "json-refs resolve -w documents/data/user.yml > static/api/user.json"
```
最後にnpm run docコマンドを実行して、実際に変換されるか確認してみましょう。  
プロジェクト内でターミナルを開いて、以下のコマンドを実行します。
```vue
npm run doc
```
上手くいけば、staticフォルダー内のapiフォルダーにsampl.jsonというファイルが作成されます！！


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
