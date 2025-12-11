# 管理者後台設定指南

## 功能說明

### 1. 登入入口
- **隱藏入口**：點擊 Header 中「薇薇V的羊毛氈手作坊」的 **"V"** 字即可進入後台登入頁面
- **認證方式**：使用 Google OAuth 2.0
- **授權限制**：只允許 `lesterskimo@gmail.com` 登入

### 2. 後台功能
- **商品列表**：查看所有商品
- **新增商品**：上架新商品
- **編輯商品**：修改現有商品資訊
- **刪除商品**：移除商品

## 設定步驟

### 步驟 1：設定 Google OAuth

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 建立新專案或選擇現有專案
3. 啟用 Google+ API
4. 前往「憑證」→「建立憑證」→「OAuth 用戶端 ID」
5. 應用程式類型選擇「網頁應用程式」
6. 設定授權的重新導向 URI：
   - 開發環境：`http://localhost:3001/api/auth/callback/google`
   - 生產環境：`https://your-domain.netlify.app/api/auth/callback/google`

### 步驟 2：設定環境變數

在專案根目錄建立 `.env.local` 檔案：

```env
# Google OAuth 設定
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth 設定
# 可以使用以下命令生成：openssl rand -base64 32
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3001
```

### 步驟 3：Netlify 環境變數設定

在 Netlify 控制台設定環境變數：
1. 前往 Site settings → Environment variables
2. 新增以下變數：
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`（使用 `openssl rand -base64 32` 生成）
   - `NEXTAUTH_URL`（設定為您的 Netlify 網址，例如：`https://your-site.netlify.app`）

## 使用方式

### 登入後台
1. 在網站首頁，點擊 Header 中的 **"V"** 字
2. 會導向登入頁面
3. 點擊「使用 Google 登入」
4. 使用 `lesterskimo@gmail.com` 登入
5. 登入成功後會自動導向商品管理後台

### 管理商品
- **查看商品**：在後台首頁可以看到所有商品列表
- **新增商品**：點擊「+ 新增商品」按鈕
- **編輯商品**：在商品列表中點擊「編輯」按鈕
- **刪除商品**：在商品列表中點擊「刪除」按鈕（會要求確認）

## 安全說明

- ✅ 只允許 `lesterskimo@gmail.com` 可以登入
- ✅ 登入入口隱藏在 Header 的 "V" 字上
- ✅ 所有認證邏輯都在伺服器端驗證
- ✅ 未授權的用戶無法訪問後台頁面

## 注意事項

目前商品管理功能是前端操作，資料變更不會持久化保存。如需持久化，需要：
1. 整合後端 API
2. 或使用資料庫（如 Supabase、Firebase 等）
3. 或使用檔案系統（不建議用於生產環境）
