# コンポーネントの分割
Nuxt.js を利用したアプリケーション開発の、 より実践的なフローを確認するために、まずは画面のコンポーネント分割にチャレンジしてみましょう。
  
## コンポーネント
実際にどんな要素をコンポーネントにするのかですが、基本的には「繰り返し使用されている要素」になります。  
例えばページデザインを統一してheader・footerを全てのページで同じものを使用している場合などです。  
全てのページでheader・footerを書くのではなくコンポーネントで作成しそれぞれのページで呼び出します。  
`components/layout/Header.vue`のようディレクトリ構造で作成し以下のように必要なページで呼び出します。
```vue
<template>
  <div>
    <l-header />
    <Nuxt />
    <l-footer />
  </div>
</template>
<script>
import LHeader from '@/components/layout/LHeader'
import LFooter from '@/components/layout/LFooter'
export default {
  components: {
    LHeader,
    LFooter,
  },
}
</script>
```

## リスト要素のコンポーネント分割
フォームの要素も、コンポーネントで分割しておくと後々便利でしょう。 新規と編集などで同じフォーム構成を使い回すケースも多いですし、 後々バリデーションなどを実装していく場合、 フォームに関するロジックを画面から分離できるとコードの見通しは非常に良くなります。  

例えば、以下のようにボタンのコンポーネントを`conponents/UIButton.vue`として作成します。
```vue
<template>
  <a
    class="btn inline-block relative cursor-pointer text-base bg-primary p-6 rounded text-white text-center w-full lg:w-2/5 lg:text-lg lg:p-8 transition ease-out duration-700 hover:opacity-75"
    :href="url"
  >
    {{ text }}
    <img
      class="btn__arrow w-8 inline absolute"
      src="@/assets/image/contact/keyboard_arrow_right-24px.svg"
      alt="arrow"
    />
  </a>
</template>
```
そして該当のページで呼び出します。
```vue
<template>
  <section class="pt-6 pb-20 lg:pt-16 lg:pb-40" v-if="contact">
    <div class="container mx-auto px-5 text-center sm:p-0">
      <UiTitle :title="contact.title" />
      <p
        class="mx-auto text-black text-left mb-10 leading-loose w-full lg:w-3/5"
      >
        {{ contact.text }}
      </p>
      <UiButton text="お問い合わせフォームへ" url="#" />
    </div>
  </section>
</template>
<script>
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
この時、呼び出し元のUIButton.vueで`{{ text }}`となっているものは呼び出し先で文字列を指定しています。(今回だと「 text="お問い合わせフォームへ" url="#"」です)また、URLも指定できます。今回は仮置きで`#`にしています。  

この様にしてコンポーネントを使うと何度も同じボタンのHTMLやCSSを書く手間が省けます。
