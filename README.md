# GlowLab Shampoo Landing - Bootstrap 5 + SCSS + Eleventy

這是一個可直接執行的示範專案，用來當作履歷 / 作品集中的一個案例，符合以下條件：

- HTML5 / CSS3 / SCSS
- Bootstrap 5，使用 SCSS 變數自行編譯主題
- BEM 命名客製化區塊（例如：`hero__title`、`plan-grid__item`）
- 使用 Eleventy (11ty) 作為 SSG 產出靜態 HTML
- Node 20+ / Yarn

## 安裝與執行

```bash
# 安裝套件
yarn

# 第一次先編譯一次 SCSS
yarn sass

# 開發（開兩個 terminal 比較方便）
# 1️⃣ 監聽 SCSS
yarn sass:watch

# 2️⃣ 啟動 Eleventy 本地伺服器
yarn dev
```

打開瀏覽器到 `http://localhost:8080`（Eleventy 預設 port）即可看到頁面。

若要產生最終靜態頁面：

```bash
yarn sass
yarn build
```

輸出會在 `_site/` 資料夾，可直接丟到 Netlify / Vercel / GitHub Pages。

你可以把這個專案放到 GitHub，當作：

> 洗髮精品牌 RWD 形象 Landing Page — 使用 Bootstrap 5 + SCSS 變數客製化與 Eleventy SSG 製作。