# 🎉 部署完成後的下一步

恭喜您成功將「薇薇V的羊毛氈手作坊」部署到 Netlify！

---

## ✅ 立即檢查事項

### 1. 確認網站正常運作

1. 在 Netlify 的專案頁面，點擊您的網站 URL（例如：`https://your-site-name.netlify.app`）
2. 檢查以下頁面是否正常載入：
   - ✅ 首頁
   - ✅ 關於我們 (`/about`)
   - ✅ 作品展示 (`/gallery`)
   - ✅ 商品列表 (`/shop`)
   - ✅ 商品詳情頁（點擊任一商品）
   - ✅ 最新消息 (`/news`)
   - ✅ 聯絡我們 (`/contact`)

### 2. 測試響應式設計

- 在瀏覽器中調整視窗大小
- 或使用開發者工具（F12）切換到手機/平板視圖
- 確認手機版選單是否正常運作

---

## 🎨 自訂網域名稱（選填）

如果您有自己的網域名稱（例如：`woolfelt.com`）：

### 步驟 1：在 Netlify 設定網域

1. 在 Netlify 專案頁面，點擊 **Domain settings**
2. 點擊 **Add custom domain**
3. 輸入您的網域名稱（例如：`woolfelt.com`）
4. 按照 Netlify 的指示設定 DNS 記錄

### 步驟 2：設定 DNS 記錄

根據 Netlify 提供的指示，在您的網域註冊商（如 GoDaddy、Namecheap 等）設定：

- **A Record** 或 **CNAME Record**
- 指向 Netlify 提供的 IP 或網址

### 步驟 3：等待 DNS 生效

- DNS 更新通常需要 24-48 小時
- 可以使用 [whatsmydns.net](https://www.whatsmydns.net) 檢查 DNS 傳播狀態

---

## 📝 更新網站內容

### 方法 1：更新商品資料

編輯 `data/products.ts` 檔案：

```typescript
{
  id: '新商品ID',
  name: '商品名稱',
  category: '吊飾',
  price: 380,
  description: '商品描述',
  images: ['/images/product.jpg'],
  customizable: true,
  inStock: true,
  // ... 其他欄位
}
```

### 方法 2：更新最新消息

編輯 `data/news.ts` 檔案，新增消息項目。

### 方法 3：更新作品展示

編輯 `data/works.ts` 檔案，新增作品項目。

### 方法 4：推送更新

```bash
# 1. 提交變更
git add .
git commit -m "更新商品/消息/作品"

# 2. 推送到 GitHub
git push

# 3. Netlify 會自動重新部署（通常 1-3 分鐘）
```

---

## 🖼️ 替換圖片

目前網站使用 emoji 作為佔位圖片，建議替換為實際商品照片：

### 步驟 1：準備圖片

1. 將商品照片放在 `public/images/` 目錄
2. 建議圖片格式：JPG 或 PNG
3. 建議圖片大小：寬度 800-1200px
4. 檔案名稱使用英文和數字（例如：`rabbit-1.jpg`）

### 步驟 2：更新資料檔案

在 `data/products.ts` 中更新圖片路徑：

```typescript
images: ['/images/rabbit-1.jpg', '/images/rabbit-2.jpg']
```

### 步驟 3：推送更新

```bash
git add public/images/
git add data/products.ts
git commit -m "更新商品圖片"
git push
```

---

## 🔧 進階設定

### 設定環境變數（如果需要）

如果未來需要 API Key 或其他敏感資訊：

1. 在 Netlify 專案頁面，點擊 **Site settings**
2. 選擇 **Environment variables**
3. 新增變數（例如：`NEXT_PUBLIC_API_URL`）
4. 在程式碼中使用：`process.env.NEXT_PUBLIC_API_URL`

### 設定自訂 404 頁面

網站已經有 `app/not-found.tsx`，Netlify 會自動使用它。

### 啟用 HTTPS

Netlify 預設提供免費的 SSL 憑證，HTTPS 會自動啟用。

---

## 📊 監控與分析

### 查看部署狀態

- 在 Netlify 專案頁面可以查看：
  - 部署歷史
  - 建置日誌
  - 網站效能指標

### 設定 Google Analytics（選填）

1. 到 [Google Analytics](https://analytics.google.com) 建立帳號
2. 取得追蹤 ID（例如：`G-XXXXXXXXXX`）
3. 在 `app/layout.tsx` 中加入 GA 程式碼
4. 或使用 Netlify 的 Analytics 功能（付費功能）

---

## 🚀 未來擴充功能

根據 PRD，未來可以考慮加入：

### 第二階段功能

1. **購物車系統**
   - 整合 Stripe 或綠界金流
   - 實作購物車功能

2. **會員中心**
   - 使用 NextAuth.js 或 Clerk
   - 實作登入/註冊功能

3. **課程報名系統**
   - 建立課程頁面
   - 整合報名表單

4. **後台 CMS**
   - 整合 Sanity 或 Strapi
   - 方便管理商品和內容

5. **Blog 功能**
   - 實作手作教學文章
   - SEO 優化

---

## 📱 社群媒體整合

### 更新聯絡資訊

在 `components/Footer.tsx` 中更新：
- Instagram 連結
- LINE 連結
- Email 地址

### 加入社群分享按鈕（選填）

可以在商品頁面加入分享到 Facebook、LINE 等功能。

---

## 🐛 常見問題

### 網站顯示 404

- 檢查路由是否正確
- 確認 `netlify.toml` 配置正確

### 樣式沒有載入

- 確認 Tailwind CSS 配置正確
- 檢查建置日誌是否有錯誤

### 圖片無法顯示

- 確認圖片路徑正確（從 `/public` 開始）
- 檢查圖片檔案是否已推送到 GitHub

---

## 📞 需要幫助？

- **Netlify 文件**：https://docs.netlify.com/
- **Next.js 文件**：https://nextjs.org/docs
- **Netlify 支援**：在 Netlify 頁面點擊 "Support"

---

**恭喜您完成部署！現在您的網站已經上線了！🎉**

每次更新代碼並推送到 GitHub，Netlify 會自動重新部署，非常方便！

