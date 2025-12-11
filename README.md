# 薇薇V的羊毛氈手作坊 Official Website

這是一個使用 Next.js 建立的羊毛氈手作坊官方網站，展現品牌溫度、作品魅力與療癒氛圍。

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

網站將在 [http://localhost:6000](http://localhost:6000) 啟動。

### 建置生產版本

```bash
npm run build
npm start
```

## 📁 專案結構

```
wool-felt-workshop/
├── app/                    # Next.js App Router 頁面
│   ├── about/             # 關於我們頁面
│   ├── contact/           # 聯絡我們頁面
│   ├── gallery/           # 作品展示頁面
│   ├── news/              # 最新消息頁面
│   ├── shop/              # 商品頁面
│   │   └── [id]/         # 商品詳情頁
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首頁
│   └── globals.css        # 全域樣式
├── components/            # 共用元件
│   ├── Header.tsx        # 網站標頭
│   └── Footer.tsx        # 網站頁尾
├── data/                  # 模擬數據
│   ├── products.ts       # 商品數據
│   ├── works.ts          # 作品數據
│   └── news.ts           # 最新消息數據
└── types/                 # TypeScript 類型定義
    └── index.ts
```

## 🎨 品牌色彩

- **主色**：薄荷綠 (#A8E6CF)、奶油黃 (#FFE5B4)
- **副色**：雲朵白 (#FFFFFF)、蜜桃粉 (#FFD3B6)、小森林綠 (#7FB069)

## ✨ 功能特色

### 第一階段（MVP）

- ✅ 首頁：品牌標語、最新作品、IP 分類導覽
- ✅ About 頁：完整品牌故事呈現
- ✅ Gallery 頁：作品照片與作品故事
- ✅ Shop 頁：商品列表與分類篩選
- ✅ Product Detail 頁：商品詳情（圖片、尺寸、售價、訂製資訊）
- ✅ Contact 頁：訂製諮詢表單
- ✅ News 頁：最新消息展示

### 未來擴充功能

- 🔄 購物車與結帳系統
- 🔄 會員中心
- 🔄 課程報名系統
- 🔄 Blog 手作教學
- 🔄 後台 CMS 系統

## 🛠️ 技術棧

- **框架**：Next.js 16 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS v4
- **字體**：Geist Sans, Geist Mono

## 📝 開發說明

### 添加新商品

編輯 `data/products.ts` 檔案，新增商品物件：

```typescript
{
  id: 'unique-id',
  name: '商品名稱',
  category: '吊飾' | '擺飾' | '圍巾' | 'IP系列' | '其他',
  price: 380,
  description: '商品描述',
  images: ['/images/product-1.jpg'],
  size: '約 5cm',
  customizable: true,
  inStock: true,
  featured: false,
  story: '作品故事（選填）',
  tags: ['標籤1', '標籤2']
}
```

### 添加最新消息

編輯 `data/news.ts` 檔案，新增消息物件。

### 添加作品

編輯 `data/works.ts` 檔案，新增作品物件。

## 🌐 SEO 設定

網站已包含基本的 SEO 設定：
- Open Graph 標籤
- Meta 描述與關鍵字
- 語意化 HTML 結構

## 📱 響應式設計

網站採用響應式設計，支援：
- 手機（Mobile）
- 平板（Tablet）
- 桌面（Desktop）

## 📄 授權

此專案為私人專案。

## 💌 聯絡資訊

如有任何問題或建議，歡迎透過以下方式聯絡：
- Email: contact@woolfelt.com
- Instagram: @woolfelt_workshop
- LINE: 加入好友

---

**因為可愛，是能療癒世界的語言。🌈**
