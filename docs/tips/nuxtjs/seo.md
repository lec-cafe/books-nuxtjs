# SEO/OGPに向けた設定

プリレンダリングされた Nuxt.js のアプリケーションは、
Head 要素の書き出し済みコンテンツを配信することにより、
SEO や OGP に対応した SPA アプリケーションを展開することが可能になります。

## グローバルな Head 要素の設定
全ページ共通の設定にしたい場合に使用します。
使い方はnuxt.config.jsに以下のように記述します
```vue
 /*
  ** Headers of the page
  */
  head: {
    title: デフォルトのタイトル,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'デフォルトdescription' },
      { hid: 'og:site_name', property: 'og:site_name', content: '〇〇' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: 'fb_app_id' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site:id', property: 'twitter:site:id', content: '@ツイッターID' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: '@ツイッターID' },
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon/favicon.ico', type: 'image/ico'},
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon16px.png', size: '16x16', type: 'image/png'},
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon32px.png', size: '32x32', type: 'image/png'},
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon64px.png', size: '64x64', type: 'image/png'},
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon180px.png', size: '180x180', type: 'image/png'}
    ],
    // これが無いとscriptの中身がエスケープされる
    __dangerouslyDisableSanitizers: ['script'],
  }
```
`hid: hoge`は子コンポーネント利用された時にメタ情報が重複してしまうことを避けるために hid キーで一意な識別子を与えてください。これについてより深く理解するには [こちら](https://vue-meta.nuxtjs.org/api/#tagidkeyname) を参照してください。  

`__dangerouslyDisableSanitizers: ['script']`,と言う記載がありますが、これをどこかに書かないと正しく反映されません。  
1ページごとに書いてもいいのですが、nuxt.config.jsに共有したら各ページには記載しなくていいので楽です。

## ページ個別での Head 要素の設定
上記にあるようにnuxt.config.jsに全体のhead要素を指定していても個別で設定出来ます。  
以下のように記述します。  

```vue
export default {
  head () {
    return {
      title: `Page 1 (${this.name}-side)`,
      meta: [
        { hid: 'description', name: 'description', content: 'Page 1 description' }
      ]
    }
  }
}
```
個別ページのheadタグを設定するために `head()` メソッドを使っています。  
コンポーネントのデータは head() メソッド内で this を使って利用できます。ページのデータを使って独自のメタタグを設定することもできます。[公式ドキュメント](https://ja.nuxtjs.org/faq/)  

## titleTemplateについて
titleTemplateを使いnuxt.config.jsのheadを編集すれば、動的にtitleの内容を変更することが可能になります。  
EX)nuxt.config.js
```vue
head: {
    //title: process.env.npm_package_name || '',
    titleTemplate:  'サイト名 example | %s',
```
pages/title.vue
```vue
<template>
  <div>
    <p>title test</p>
  </div>
</template>
 
<script>
export default {
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: 'タイトルタグのテストページ'
    }
  }
}
</script>
```
表示結果  
`<title>サイト名 example | タイトルタグのテストページ</title>`  
ブラウザから http://プライベートIP:3000/title にアクセスして、titleタグを確認すると「サイト名 example」＋ 「コード内で指定したtitle:の文字列(今回なら「タイトルタグのテストページ」)が表示されます。
  
また、titleTemplateが必要でないページの場合は、下記のようにコード内でtitleTemplateを上書きしてやれば表示されなくなります。
```vue
<script>
export default {
  head() {
    return {
      title: 'タイトルタグのテストページ',
      titleTemplate: ''
    }
  }
}
</script>
```
表示結果  
`<title>タイトルタグのテストページ</title>`
titleTemplateが表示されなくなる

## Head要素のブラウザでの確認方法

