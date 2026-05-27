# 有明不動産株式会社 コーポレートサイト

Next.js + Tailwind CSS で構築したコーポレートサイトです。GitHub Pages へ静的デプロイします。

## セットアップ

```bash
npm install
npm run dev
```

## Formspree の設定

お問い合わせフォームは Formspree を利用しています。

- エンドポイント: `https://formspree.io/f/xojbpzvp`
- 送信先実装: [app/components/Contact.tsx](app/components/Contact.tsx)

## GitHub Pages へのデプロイ

1. GitHub リポジトリの **Settings → Pages** で Source を `GitHub Actions` に設定
2. `main` ブランチへ push すると自動デプロイされます

### カスタムドメイン（ariake.estate）を使う場合

`public/CNAME` ファイルを作成してドメインを記述してください。

```text
ariake.estate
```

## ページ構成

| セクション | 内容 |
|---|---|
| Hero | キャッチコピー・CTA |
| 取扱物件 | 賃貸/売買の物件種別 |
| 会社概要 | 会社情報テーブル |
| アクセス | Google マップ・住所 |
| お問い合わせ | Formspree フォーム |
| フッター | ナビ・連絡先 |

## 技術スタック

- Next.js 16（App Router / Static Export）
- Tailwind CSS v4
- Noto Sans JP
- Formspree
- GitHub Pages + GitHub Actions
