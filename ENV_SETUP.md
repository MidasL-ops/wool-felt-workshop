# 環境變數設定說明

## 設定 Google OAuth

### 1. 建立 Google OAuth 憑證

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 建立新專案或選擇現有專案
3. 啟用 Google+ API
4. 前往「憑證」→「建立憑證」→「OAuth 用戶端 ID」
5. 應用程式類型選擇「網頁應用程式」
6. 授權的重新導向 URI 設定為：
   - 開發環境：`http://localhost:3001/api/auth/callback/google`
   - 生產環境：`https://your-domain.netlify.app/api/auth/callback/google`

### 2. 設定環境變數

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

### 3. Netlify 環境變數設定

在 Netlify 控制台設定環境變數：
1. 前往 Site settings → Environment variables
2. 新增以下變數：
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (設定為您的 Netlify 網址)

## 安全說明

- 只允許 `lesterskimo@gmail.com` 可以登入後台
- 登入入口隱藏在 Header 的 "V" 字上
- 所有認證邏輯都在伺服器端驗證
