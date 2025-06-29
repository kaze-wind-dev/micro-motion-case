# micro-motion-case

## 概要
スクロール連動アニメーションと画像遅延読み込みを備えた  
**Next.js × Tailwind CSS × microCMS** のプロジェクト。

## 特徴・機能

- **データ取得＋スピナー**  
  - `useEffect` + fetch で API 取得中は中央にローディングスピナー表示

- **画像遅延読み込み**  
  - `IntersectionObserver`（`useInview` フック）でビューポート入場時にロード

- **スクロールアニメーション**  
  - GSAP + ScrollTrigger + Timeline で、見出し→テキスト→オーバーレイ→画像を階層的にアニメーション

- **レスポンシブ対応**  
  - `matchMedia` でモバイル・デスクトップ別にアニメーション調整

- **CI/CD**  
  - GitHub ＋ Vercel でプッシュごとに自動デプロイ

- **API呼び出し**  
  - fetch + Typescript による自作関数
 
## 公開URL
ブラウザで [https://micro-motion-case.vercel.app/](https://micro-motion-case.vercel.app/) にアクセス。

## ディレクトリ構成

```
/app
├── page.tsx
├── components/
│   └── AnimationSection.tsx
├── hooks/
│   └── useInview.ts
├── libs/
│   └── microcmsClient.ts
├── types/
├── constants/
└── styles/
/public/images
```

## 環境構築・起動手順

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/kaze-wind-dev/micro-motion-case.git
   cd micro-motion-case
   ```

2. **依存パッケージのインストール**
   ```bash
   npm install
   # または
   yarn install
   ```

3. **環境変数の設定**

   プロジェクトルートに `.env.local` ファイルを作成し、以下を記入してください。

   ```
   NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=xxxxxxx
   NEXT_PUBLIC_MICROCMS_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
   ```

   - microCMSのサービスドメイン・APIキーを[管理画面](https://microcms.io/)から取得してください。

4. **開発サーバーの起動**
   ```bash
   npm run dev
   # または
   yarn dev
   ```

   ブラウザで [http://localhost:3000](http://localhost:3000) にアクセス。

## スクリプト

| コマンド        | 説明                    |
|-----------------|-----------------------|
| `dev`           | 開発サーバー起動（localhost:3000） |
| `build`         | 本番用ビルド           |
| `start`         | 本番ビルドの起動       |

例：
```bash
npm run build
npm start
```

## 使用技術

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [microCMS](https://microcms.io/)
- [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)


## 学び・工夫点
- GSAP の matchMedia, timeline, ScrollTrigger を使ったレスポンシブアニメーション制御
- CSSRulePlugin を使わずオーバーレイ要素で疑似要素演出
- 自作フック＋自作関数による型安全なデータ取得（getのみ）

---

**ご質問・不具合報告は Issues からお気軽にどうぞ。**
